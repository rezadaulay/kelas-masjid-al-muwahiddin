declare global {
    namespace NodeJS {
      interface ProcessEnv {
        [key: string]: string | undefined;
        SUPABASE_URL: string;
        SUPABASE_KEY: string;
      }
    }
  }
  