import { createClient } from "contentful";
import { draftMode } from "next/headers";

// Regular client for published content
const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  environment: process.env.CONTENTFUL_ENVIRONMENT || "master",
});

// Preview client for draft content
const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_PREVIEW_TOKEN || "",
  environment: process.env.CONTENTFUL_ENVIRONMENT || "master",
  host: "preview.contentful.com",
});

// Choose which client to use based on draft mode
export const getClient = () => {
  const { isEnabled } = draftMode();
  return isEnabled ? previewClient : contentfulClient;
};

// Update all methods to use the appropriate client
export const getProjects = async () => {
  const client = getClient();
  const response = await client.getEntries({
    content_type: "project",
    order: "-sys.createdAt",
  });

  return response.items;
};

export const getProject = async (slug: string) => {
  const client = getClient();
  const response = await client.getEntries({
    content_type: "project",
    "fields.slug": slug,
    limit: 1,
  });

  return response.items[0];
};

export const getTeamMembers = async () => {
  const client = getClient();
  const response = await client.getEntries({
    content_type: "teamMember",
    order: "fields.order",
  });

  return response.items;
};

export const getServices = async () => {
  const client = getClient();
  const response = await client.getEntries({
    content_type: "service",
    order: "fields.order",
  });

  return response.items;
};

export default contentfulClient;
