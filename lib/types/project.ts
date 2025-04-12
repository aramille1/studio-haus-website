import type { StrapiCommonFields, StrapiImage } from '../strapi';

export interface Project extends StrapiCommonFields {
  title: string;
  slug: string;
  description: string;
  content: string;
  mainImage: StrapiImage;
  gallery: {
    data: Array<{
      id: number;
      attributes: {
        url: string;
        width: number;
        height: number;
        alternativeText?: string;
      }
    }>
  };
  client: string;
  services: string[];
  year: number;
  featured: boolean;
}

export interface ProjectListItem extends StrapiCommonFields {
  title: string;
  slug: string;
  description: string;
  client: string;
  mainImage: StrapiImage;
  featured: boolean;
  year: number;
}
