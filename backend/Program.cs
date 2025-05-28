using System;
using MyBackendApp.Utils;
using MyBackendApp.Database;

namespace MyBackendApp
{
    class Program
    {
        static void Main(string[] args)
        {
            EnvLoader.LoadEnv();

            var db = new DbConnector();

            using var connection = db.GetConnection();
            try
            {
                connection.Open();
                Console.WriteLine("Connected to MySQL database successfully!");
                // Perform DB operations here
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error connecting to database: {ex.Message}");
            }
        }
    }
}
