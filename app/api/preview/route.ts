import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const slug = searchParams.get('slug') || '';
  const type = searchParams.get('type') || 'page';

  // Check the secret and next parameters
  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return new Response('Invalid token', { status: 401 });
  }

  // Enable Draft Mode
  draftMode().enable();

  // Redirect to the path based on content type
  if (type === 'project') {
    redirect(`/work/${slug}`);
  } else if (type === 'page') {
    redirect(`/${slug}`);
  } else {
    redirect('/');
  }
}
