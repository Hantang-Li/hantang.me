// Single source of truth for profile content.
// Edit this file to update the home, projects and resume pages.

export const site = {
  name: 'Hantang Li',
  nameZh: '李汉唐',
  title: 'Hantang Li — Software Engineer, AI & infrastructure',
  description:
    'Hantang Li is a software engineer in Toronto with a background in generative AI and computer vision research and in large-scale distributed infrastructure. Currently studying mechanistic interpretability.',
  role: 'Software Engineer · AI & infrastructure',
  // Shown in the "Now" strip on the home page. Update freely.
  now: {
    text: 'On a three-month plan: studying mechanistic interpretability and looking for my next role in AI.',
    updated: 'Nov 2026',
  },
  location: 'Toronto, Canada',
  // Set to false to hide the "open to opportunities" badge and contact wording site-wide.
  openToWork: true,
  email: 'hantang.li.work@gmail.com',
  links: {
    github: 'https://github.com/Hantang-Li',
    linkedin: 'https://www.linkedin.com/in/hantang-li-job',
    scholar: 'https://scholar.google.com/citations?user=-5ufi-oAAAAJ',
    // instagram: 'https://www.instagram.com/<handle>',  // TODO: add handle to show it on /about
  },
};

export const nav = [
  { href: '/projects/', label: 'Projects' },
  { href: '/blog/', label: 'Writing' },
  { href: '/about/', label: 'About' },
  { href: '/resume/', label: 'Resume' },
];

export type Job = {
  org: string;
  team?: string;
  role: string;
  start: string; // YYYY-MM
  end: string | null;
  place: string;
  oneLine: string;
};

// Deliberately kept to one line per role.
export const experience: Job[] = [
  {
    org: 'Amazon Web Services',
    role: 'Software Development Engineer',
    start: '2025-02',
    end: '2026-10',
    place: 'Toronto, ON',
    oneLine: 'Large-scale distributed infrastructure, plus LLM tooling for engineering operations.',
  },
  {
    org: 'Ecomtent (now Azoma)',
    team: 'Joined via MScAC internship · early engineering team · Techstars ’23',
    role: 'Artificial Intelligence Engineer',
    start: '2023-05',
    end: '2023-12',
    place: 'Toronto, ON',
    oneLine: 'GenAI SaaS that generates e-commerce product imagery, built on fine-tuned diffusion models.',
  },
  {
    org: 'Sunnybrook Health Sciences Centre',
    team: 'AICONS Lab',
    role: 'Research Assistant',
    start: '2021-05',
    end: '2022-07',
    place: 'Toronto, ON',
    oneLine: 'Deep learning for stroke imaging: CT perfusion synthesis and lesion segmentation.',
  },
  {
    org: 'Huawei Noah’s Ark Lab',
    team: 'Video Understanding Team',
    role: 'Research Engineer',
    start: '2020-05',
    end: '2021-05',
    place: 'Markham, ON',
    oneLine: 'Video classification models trained on large, long-tailed multimodal data.',
  },
];

export const education = [
  {
    school: 'University of Toronto',
    degree: 'Master of Science in Applied Computing (MScAC)',
    start: '2022-09',
    end: '2023-12',
    notes: 'GPA 4.0/4.0 · Mitacs funding recipient · Research: product listing and infographic generation',
  },
  {
    school: 'University of Toronto',
    degree: 'Honours Bachelor of Science, with high distinction',
    start: '2017-09',
    end: '2022-05',
    notes: 'Computer Science Specialist & Data Science Specialist · GPA 3.9/4.0 · Dean’s List every semester',
  },
];

export const skills = [
  { group: 'Systems', items: ['Distributed systems', 'AWS (Bedrock, S3, EC2)', 'Microservices', 'Docker', 'Linux'] },
  { group: 'AI / ML', items: ['PyTorch', 'RAG', 'LangChain', 'LanceDB', 'Stable Diffusion', 'OpenCV'] },
  { group: 'Languages', items: ['Java', 'Kotlin', 'Python', 'TypeScript', 'SQL', 'R'] },
];

export type Project = {
  title: string;
  kind: string; // short label, e.g. "Patent", "Product", "Research"
  year?: string;
  summary: string;
  tags: string[];
  href?: string; // external link; cards without one render as plain cards
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Content and layout control for generative systems',
    kind: 'US Patent 12,169,850 B1',
    year: '2024',
    summary:
      'A granted US patent on controlling both content and layout when generating marketing visuals with generative models. The system I built during my MScAC internship at Ecomtent later became part of it.',
    tags: ['Generative AI', 'Diffusion', 'Layout'],
    href: 'https://patents.google.com/patent/US12169850B1',
    featured: true,
  },
  {
    title: 'Generative AI for product listings and infographics',
    kind: 'MScAC internship · Ecomtent (now Azoma)',
    year: '2023',
    summary:
      'Designed and built the ML system behind Ecomtent’s AI-generated product images and infographics: diffusion models for imagery, layout-generation networks with constraints on position and size, and stateless API endpoints on AWS.',
    tags: ['Diffusion', 'Layout generation', 'LoRA'],
    href: 'https://www.cs.toronto.edu/dcs/documents/mscac/projects/?project_id=1051&view=full',
    featured: true,
  },
  {
    title: 'MLaaS 6.5k-GPU trace analysis',
    kind: 'Systems analysis',
    summary:
      'Analyzed scheduling fairness in a 6.5k-GPU production cluster trace. Finding: wait times on low-end, shared GPUs are distributed more fairly than on high-end ones.',
    tags: ['GPU scheduling', 'Data analysis'],
    href: 'https://github.com/Hantang-Li/Analysis-of-MLaaS-GPU-cluster-trace',
    featured: true,
  },
  {
    title: 'Music-score object detection',
    kind: 'Computer vision',
    summary:
      'Applied a Detection Transformer to dense music-notation detection and surpassed the Faster R-CNN baseline.',
    tags: ['DETR', 'PyTorch'],
    href: 'https://github.com/Hantang-Li/Exploration-of-Music-Object-Detection-using-Detection-Transformer',
    featured: true,
  },
  {
    title: 'CT perfusion synthesis for stroke diagnosis',
    kind: 'Medical imaging research',
    year: '2021–22',
    summary:
      'Functional-Consistent CycleGAN for synthesizing CT perfusion maps, plus a UNet Transformer pipeline for stroke lesion segmentation on sparse data, at Sunnybrook’s AICONS lab.',
    tags: ['CycleGAN', 'UNet Transformer', '3D imaging'],
  },
  {
    title: 'Long-tail video classification',
    kind: 'Huawei Noah’s Ark Lab',
    year: '2020–21',
    summary:
      'Fine-tuned video classification models on terabytes of imbalanced multimodal data for Huawei Cloud VCT, with full-stack prototypes to visualize real-time inference.',
    tags: ['Video understanding', 'Long-tail', 'Django'],
  },
];

export function fmtMonth(ym: string | null): string {
  if (!ym) return 'Present';
  const [y, m] = ym.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
