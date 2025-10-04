export type Project = {
  id: string;
  title: string;
  blurb: string;
  tags: string[];
  repoUrl: string;
  liveUrl?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "movieflix",
    title: "MovieFlix",
    blurb:
      "React-based movie browser using TMDb API with search, details view, favorites (localStorage), and responsive UI built with Tailwind CSS & DaisyUI.",
    tags: ["React", "React Router DOM", "DaisyUI", "Context API"],
    repoUrl: "https://github.com/MostafaGaber135/movieflix",
    liveUrl: "https://movieflixyz.netlify.app/",
  },
  {
    id: "codemap",
    title: "CodeMap",
    blurb:
      "Web app that provides structured learning paths and roadmaps for developers, with an intuitive bilingual (Arabic/English) UI.",
    tags: ["Next", "Material UI", "Supabase"],
    repoUrl: "https://github.com/MostafaGaber135/codemap",
    liveUrl: "https://code-map-psi.vercel.app/",
  },
  {
    id: "iti-market",
    title: "ITI Market",
    blurb:
      "E-commerce platform offering a wide range of products, from electronics and gadgets to home essentials and fashion.",
    tags: ["HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/MostafaGaber135/ITI_1st",
    liveUrl: "https://iti-market.netlify.app/",
  },
];
