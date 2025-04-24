export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  client?: string;
  services?: string[];
  year?: number;
  challenge?: string;
  approach?: string;
  results?: {
    stats: Array<{
      value: string;
      label: string;
    }>;
    summary: string;
  };
  gallery?: string[];
}

// Project data
export const projects: Project[] = [
  {
    id: 1,
    title: "Angular Talents",
    description: "Dedicated platform for finding and hiring Angular developers.",
    image: "/angulardevs.png",
    link: "https://angular-talents.com",
    client: "Angular Talents",
    services: ["Web Development", "UI/UX Design", "Platform Development"],
    year: 2023,
    challenge: "Our client needed to create a specialized platform to connect Angular developers with companies looking to hire. The challenge was to build a platform that would stand out in a crowded market of job boards and create a smooth experience for both developers and employers.",
    approach: "We developed a modern, Angular-based platform with an intuitive interface that makes it easy for developers to showcase their skills and for companies to find the right talent. The platform includes advanced filtering, matching algorithms, and integrated messaging.",
    results: {
      stats: [
        { value: "+78%", label: "User engagement" },
        { value: "+65%", label: "Successful matches" },
        { value: "+42%", label: "Repeat users" }
      ],
      summary: "The platform has become a go-to resource for Angular developers and companies seeking specialized talent. Monthly active users have grown consistently since launch."
    },
    gallery: ["/angulardevs.png", "/angularrole.png", "/placeholder.svg", "/placeholder.svg"]
  },
  {
    id: 2,
    title: "The Bootcamp Directory",
    description: "Find the best bootcamps for your needs in one place.",
    image: "/bootcampdir-details.png",
    link: "https://thebootcampdirectory.com",
    client: "Education First Inc.",
    services: ["Web Design", "Development", "SEO Strategy"],
    year: 2022,
    challenge: "The client needed a comprehensive directory that would help prospective students find and compare coding bootcamps. With hundreds of bootcamps available, users needed a way to filter and find programs that matched their specific needs and goals.",
    approach: "We created a searchable directory with detailed profiles of each bootcamp, including curriculum details, cost, duration, and student reviews. The site includes advanced filtering options and a comparison tool to help users make informed decisions.",
    results: {
      stats: [
        { value: "+120K", label: "Monthly visitors" },
        { value: "+85%", label: "Search ranking increase" },
        { value: "+63%", label: "Conversion rate" }
      ],
      summary: "The Bootcamp Directory has become one of the most visited educational resource sites in the tech industry, helping thousands of students find the right programs for their career goals."
    },
    gallery: ["/bootcampdir-main.png", "/bootcampdir-main.png", "/placeholder.svg"]
  },
];

// Helper function to get a project by ID
export function getProjectById(id: number | string): Project | undefined {
  const numericId = typeof id === 'string' ? parseInt(id, 10) : id;
  return projects.find(project => project.id === numericId);
}

// Helper function to get all projects
export function getAllProjects(): Project[] {
  return projects;
}

// Generate dummy projects for the work page grid
export function generateDummyProjects(count: number): Project[] {
  const dummyProjects: Project[] = [];

  // Start after the real projects
  let startId = projects.length + 1;

  for (let i = 0; i < count; i++) {
    dummyProjects.push({
      id: startId + i,
      title: `Project ${startId + i}`,
      description: "A sample project description showcasing our work and expertise.",
      image: "/placeholder.svg",
      link: `#project-${startId + i}`,
      client: "Sample Client",
      services: ["Design", "Development", "Strategy"],
      year: 2023,
      challenge: "This client faced challenges in their digital presence and needed a comprehensive solution to improve user engagement and conversion rates.",
      approach: "We developed a tailored strategy focusing on user experience, modern design principles, and performance optimization to address the client's specific needs.",
      results: {
        stats: [
          { value: "+45%", label: "User engagement" },
          { value: "+38%", label: "Conversion rate" },
          { value: "+52%", label: "Page views" }
        ],
        summary: "The project exceeded client expectations, resulting in significant improvements across all key performance indicators."
      },
      gallery: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
    });
  }

  return dummyProjects;
}
