# Studio Haus Website

This is the official website for Studio Haus, a creative agency based in Berlin.

## Features

- Modern, responsive design
- Next.js frontend with TypeScript
- Strapi CMS for content management
- Deployed on Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm or npm
- A Strapi CMS instance (self-hosted or cloud)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aramille1/studio-haus-website.git
   cd studio-haus-website
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Create a `.env.local` file in the root directory with your Strapi configuration:
   ```
   NEXT_PUBLIC_STRAPI_API_URL=https://your-strapi-url.com
   STRAPI_API_TOKEN=your_strapi_api_token
   ```

4. Start the development server:
   ```bash
   pnpm dev
   ```

## Setting Up Strapi CMS

### Option 1: Self-hosted Strapi

1. Create a new Strapi project:
   ```bash
   npx create-strapi-app@latest studio-haus-cms
   cd studio-haus-cms
   ```

2. Start the Strapi server:
   ```bash
   npm run develop
   ```

3. Create content types in Strapi:
   - Projects
   - About
   - Services
   - Team Members
   - Contact Information

4. Generate an API token:
   - Go to Settings > API Tokens
   - Create a new API token with appropriate permissions
   - Use this token in your `.env.local` file

### Option 2: Strapi Cloud

1. Sign up for [Strapi Cloud](https://strapi.io/cloud)
2. Create a new project
3. Follow the same steps as above to set up content types and API tokens
4. Update your `.env.local` file with the cloud URL and token

## Deployment

### Deploying to Vercel

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Update with Strapi integration"
   git push
   ```

2. Connect your GitHub repository to Vercel:
   - Go to [Vercel](https://vercel.com/)
   - Import your GitHub repository
   - Add environment variables in Vercel:
     - NEXT_PUBLIC_STRAPI_API_URL
     - STRAPI_API_TOKEN
   - Deploy

### Deploying Strapi to a VPS or hosting provider

For self-hosted Strapi, you can deploy to:
- Digital Ocean
- Heroku
- AWS
- Any other VPS provider

Follow the [Strapi deployment guide](https://docs.strapi.io/dev-docs/deployment) for detailed instructions.

## Content Structure

### Projects
- Title
- Slug
- Description
- Content (Rich Text)
- Main Image
- Gallery
- Client
- Services
- Year
- Featured (boolean)

### Team Members
- Name
- Role
- Bio
- Photo

### Services
- Title
- Description
- Icon

## License

This project is private and proprietary.
