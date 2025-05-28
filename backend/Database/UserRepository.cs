// Database/UserRepository.cs
using System;
using backend.Models;
using Dapper;
using System.Linq;

namespace backend.Database
{
    public class UserRepository
    {
        private readonly DbConnector _db;

        public UserRepository(DbConnector db)
        {
            _db = db;
        }

        public void RegisterUser(User user)
        {
            using var conn = _db.GetConnection();
            conn.Open();

            string query = @"INSERT INTO users (username, email, password, name, role)
                             VALUES (@Username, @Email, @Password, @Name, @Role);";

            conn.Execute(query, user);
        }

        public User? GetUserByUsername(string username)
        {
            using var connection = _db.GetConnection();
            connection.Open();

            var query = "SELECT * FROM users WHERE username = @Username LIMIT 1";
            var user = connection.QuerySingleOrDefault<User>(query, new { Username = username });
            return user;
        }

    }
}
