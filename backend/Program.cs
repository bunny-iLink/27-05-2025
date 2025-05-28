using backend.Database;
using backend.Utils;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;


var builder = WebApplication.CreateBuilder(args);

// Load environment variables
EnvLoader.LoadEnv();
builder.Configuration.AddEnvironmentVariables();

// Register services
builder.Services.AddSingleton<DbConnector>();
builder.Services.AddSingleton<UserRepository>();

var jwtKey = Environment.GetEnvironmentVariable("Jwt__Key")
    ?? throw new InvalidOperationException("JWT secret key (Jwt__Key) not found in environment variables.");
var jwtIssuer = Environment.GetEnvironmentVariable("Jwt__Issuer");
var jwtAudience = Environment.GetEnvironmentVariable("Jwt__Audience");

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = jwtIssuer,
            ValidAudience = jwtAudience,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey))
        };
    });

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularApp",
        policy =>
        {
            policy.WithOrigins("http://localhost:4200") // Your Angular app URL
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

builder.Services.AddAuthorization();

// Add support for controllers and Swagger
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowAngularApp");
// Enable routing and controller endpoints
app.UseHttpsRedirection();
app.UseRouting();
app.UseAuthentication(); // 🔥 Enables JWT authentication
app.UseAuthorization(); // Optional unless you add [Authorize]

app.MapControllers(); // 🔥 Maps controller routes like /api/user/register

app.Run();
