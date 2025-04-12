import { revalidatePath } from 'next/cache';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Get the request body JSON
    const body = await request.json();

    // Verify the webhook is coming from Contentful
    const secret = request.headers.get('x-contentful-webhook-secret');

    if (secret !== process.env.CONTENTFUL_WEBHOOK_SECRET) {
      return new Response(JSON.stringify({ message: 'Invalid secret' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Extract content type and ID
    const contentTypeId = body?.sys?.contentType?.sys?.id;
    const entryId = body?.sys?.id;

    if (!contentTypeId || !entryId) {
      throw new Error('Missing required content information');
    }

    // Revalidate appropriate paths based on content type
    if (contentTypeId === 'project') {
      // Revalidate project list pages and individual project page
      revalidatePath('/work');
      // If we knew the slug we could revalidate specific project page
      revalidatePath('/work/[slug]', 'layout');
    } else if (contentTypeId === 'teamMember') {
      // Revalidate about section
      revalidatePath('/#about');
      revalidatePath('/');
    } else if (contentTypeId === 'service') {
      // Revalidate services section
      revalidatePath('/#services');
      revalidatePath('/');
    } else {
      // Revalidate everything if we're not sure
      revalidatePath('/', 'layout');
    }

    return new Response(JSON.stringify({
      revalidated: true,
      message: `Revalidated content: ${contentTypeId} (${entryId})`
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Revalidation error:', error);
    return new Response(JSON.stringify({
      revalidated: false,
      message: error instanceof Error ? error.message : 'Unknown error'
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
