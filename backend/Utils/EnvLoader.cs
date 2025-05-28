using DotNetEnv;

namespace backend.Utils
{
    public static class EnvLoader
    {
        public static void LoadEnv()
        {
            // Loads .env variables into environment variables
            Env.Load();
        }
    }
}
