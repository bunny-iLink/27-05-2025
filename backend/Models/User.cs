// Models/User.cs
namespace backend.Models
{
    public class User
    {
        public int Id { get; set; }
        public string ?Username { get; set; }
        public string ?Email { get; set; }
        public string ?Password { get; set; } // Will be hashed
        public string ?Name { get; set; }
        public string ?Role { get; set; }
    }
}
