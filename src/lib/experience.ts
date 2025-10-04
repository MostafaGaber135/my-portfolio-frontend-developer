export type ExperienceItem = {
  id: string;
  badge?: string;      
  dateRange?: string;   
  title: string;
  org?: string;
  description?: string;
  linkLabel?: string;
  linkHref?: string;
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "p1",
    badge: "FREELANCE PROJECT",
    title: "Frontend Developer",
    org: "PassAhead",
    description:
      "Built an online platform providing question banks to help students and professionals prepare for exams. Utilized Next.js, Tailwind CSS, and RESTful APIs to create a seamless user experience.",
    linkLabel: "View Project",
    linkHref: "https://passahead.com/",
  },
  {
    id: "p2",
    dateRange: "JUNE 2021 — JULY 2021",
    title: "Summer Training Project",
    org: "Banque Misr (Online)",
    description: "",
  },
];
