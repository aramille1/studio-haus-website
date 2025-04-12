import { fetchAPI, extractStrapiItems, extractStrapiItem } from '../strapi';
import type { Project, ProjectListItem } from '../types/project';

/**
 * Fetch all projects from Strapi
 */
export async function getAllProjects(params: Record<string, any> = {}): Promise<(ProjectListItem & { id: number })[]> {
  try {
    const response = await fetchAPI<ProjectListItem>('projects', {
      populate: 'mainImage',
      sort: 'year:desc',
      ...params,
    });

    return extractStrapiItems<ProjectListItem>(response);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

/**
 * Fetch featured projects from Strapi
 */
export async function getFeaturedProjects(): Promise<(ProjectListItem & { id: number })[]> {
  return getAllProjects({
    filters: { featured: true },
    limit: 6
  });
}

/**
 * Fetch a single project by slug
 */
export async function getProjectBySlug(slug: string): Promise<(Project & { id: number }) | null> {
  try {
    const response = await fetchAPI<Project>('projects', {
      filters: { slug: { $eq: slug } },
      populate: 'mainImage,gallery',
    });

    return extractStrapiItem<Project>(response);
  } catch (error) {
    console.error(`Error fetching project by slug (${slug}):`, error);
    return null;
  }
}

/**
 * Get all project slugs (for static paths generation)
 */
export async function getAllProjectSlugs(): Promise<string[]> {
  try {
    const response = await fetchAPI<{ slug: string }>('projects', {
      fields: ['slug'],
    });

    const projects = extractStrapiItems<{ slug: string }>(response);
    return projects.map(project => project.slug);
  } catch (error) {
    console.error('Error fetching project slugs:', error);
    return [];
  }
}
