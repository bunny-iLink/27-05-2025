using System;
using System.Data;
using MySql.Data.MySqlClient;

namespace backend.Database
{
    public class DbConnector
    {
        private readonly string _connectionString;

        public DbConnector()
        {
            var host = Environment.GetEnvironmentVariable("DB_HOST");
            var port = Environment.GetEnvironmentVariable("DB_PORT");
            var dbName = Environment.GetEnvironmentVariable("DB_NAME");
            var user = Environment.GetEnvironmentVariable("DB_USER");
            var pass = Environment.GetEnvironmentVariable("DB_PASS");

            _connectionString = $"Server={host};Port={port};Database={dbName};Uid={user};Pwd={pass};";
        }

        public IDbConnection GetConnection()
        {
            return new MySqlConnection(_connectionString);
        }
    }
}
