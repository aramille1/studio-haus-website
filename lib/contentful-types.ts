import { Document } from "@contentful/rich-text-types";
import { Entry, Asset } from "contentful";

export interface TeamMember {
  name: string;
  position: string;
  bio: string;
  photo: Asset;
  order: number;
}

export interface Service {
  title: string;
  description: Document;
  icon: string;
  order: number;
}

export interface Project {
  title: string;
  slug: string;
  description: Document;
  shortDescription: string;
  featured: boolean;
  client: string;
  category: string;
  date: string;
  coverImage: Asset;
  images: Asset[];
}

export type TeamMemberEntry = Entry<TeamMember>;
export type ServiceEntry = Entry<Service>;
export type ProjectEntry = Entry<Project>;
