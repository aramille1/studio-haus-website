import { createClient } from "contentful";

const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  environment: process.env.CONTENTFUL_ENVIRONMENT || "master",
});

export const getProjects = async () => {
  const response = await contentfulClient.getEntries({
    content_type: "project",
    order: "-sys.createdAt",
  });

  return response.items;
};

export const getProject = async (slug: string) => {
  const response = await contentfulClient.getEntries({
    content_type: "project",
    "fields.slug": slug,
    limit: 1,
  });

  return response.items[0];
};

export const getTeamMembers = async () => {
  const response = await contentfulClient.getEntries({
    content_type: "teamMember",
    order: "fields.order",
  });

  return response.items;
};

export const getServices = async () => {
  const response = await contentfulClient.getEntries({
    content_type: "service",
    order: "fields.order",
  });

  return response.items;
};

export default contentfulClient;
