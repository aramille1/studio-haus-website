declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CONTENTFUL_SPACE_ID: string;
      CONTENTFUL_ACCESS_TOKEN: string;
      CONTENTFUL_PREVIEW_TOKEN?: string;
      CONTENTFUL_ENVIRONMENT?: string;
    }
  }
}

// Make sure variables are set
export function validateEnv(): void {
  if (!process.env.CONTENTFUL_SPACE_ID) {
    throw new Error("Missing CONTENTFUL_SPACE_ID environment variable");
  }

  if (!process.env.CONTENTFUL_ACCESS_TOKEN) {
    throw new Error("Missing CONTENTFUL_ACCESS_TOKEN environment variable");
  }
}
