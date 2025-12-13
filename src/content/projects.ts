import projectClfImage from '../assets/project-clf-logo.png';

export interface Project {
    title: string;
    description: Record<'en' | 'es', string>;
    link: string;
    image: string;
    tags: string[];
}

export const PROJECTS: Project[] = [
    {
        title: "Caribbean Language Facility",
        description: {
            en: "An educational platform for bilingual training and vocational skills in the Caribbean.",
            es: "Plataforma educativa para formación bilingüe y capacitación técnica en el Caribe."
        },
        link: "https://caribbean-languages-facility.vercel.app/",
        image: projectClfImage,
        tags: ["Education", "Bilingual", "Services"]
    }
];
