/**
 * Single source of truth for every fact on the site.
 *
 * Source hierarchy (highest first):
 *   1. Leading University faculty profile  https://lus.ac.bd/author/anam/   (read 4 Oct 2026)
 *   2. Leading University faculty list     https://lus.ac.bd/faculty-of-english/
 *   3. The research dossier (4 Oct 2026) — leads only, never published as fact
 *
 * Nothing here is inferred. A field the sources do not state is absent, and the page that would show it
 * renders a "pending" state instead. Add confirmed material here; no component needs to change.
 */

export const profile = {
  name: "Anam Ahmed",
  initials: "AA",
  role: "Lecturer",
  department: "Department of English",
  institution: "Leading University",
  city: "Sylhet, Bangladesh",
  /** Hero credential: taken from the university faculty profile (same entry as the Education list). No year is stated. */
  credential: { degree: "Master's in Teaching English as a Second Language (TESL)", institution: "Kent State University, United States" },
  /** Positioning line. Paraphrases the research interests the university profile lists; claims nothing beyond them. */
  statement: "Second-language learning, teacher education and critical thinking in the English classroom.",
  intro:
    "My work centres on how people learn English as a second language and how teachers are prepared to teach it.",
  /**
   * Portrait supplied by Anam Ahmed (cropped 4:5 from the original, 900 × 1125; AVIF/WebP siblings sit beside the JPEG in
   * /public/images). The caption is deliberately neutral: the name only.
   */
  portrait: {
    src: "/images/anam-ahmed-portrait.jpg",
    width: 900,
    height: 1125,
    alt: "Portrait of Anam Ahmed in a blue jacket and mustard shirt, photographed against a plain white background.",
    caption: "Anam Ahmed",
  } as null | { src: string; width: number; height: number; alt: string; caption: string },
} as const;

/** Official pages — the only profile links shown publicly. */
export const links = {
  facultyList: "https://lus.ac.bd/faculty-of-english/",
  facultyProfile: "https://lus.ac.bd/author/anam/",
  department: "https://lus.ac.bd/academic/department-of-english/",
  /** Official Facebook page supplied by Anam Ahmed, for English spoken / English language teaching activities. */
  facebook: "https://www.facebook.com/share/1F3o5qdHXP/",
} as const;

export const facebookLabel = "English Spoken & Language Learning";

/** Biography — first person, built only from what the university faculty profile states. */
export const bio = [
  "I am a Lecturer in the Department of English at Leading University in Sylhet, Bangladesh.",
  "My training is in English and in the teaching of it. I hold a master's degree in Teaching English as a Second Language (TESL) from Kent State University in the United States, an earlier master's in English Literature from Khulna University, and a B.A. (Honours) in English Language and Literature from Jatiya Kabi Kazi Nazrul Islam University.",
  "My research interests lie in second-language reading and writing, teacher education, lesson planning, critical thinking and social emotional learning.",
];

export type Degree = { degree: string; field: string; institution: string; note?: string };
/** Listed in the order the university profile gives them, most recent first. Years are not stated and are not shown. */
export const education: Degree[] = [
  { degree: "M.A. (second master's)", field: "Teaching English as a Second Language (TESL)", institution: "Kent State University, United States" },
  { degree: "M.A. (first master's)", field: "English Literature", institution: "English Discipline, Khulna University" },
  { degree: "B.A. (Honours)", field: "English Language and Literature", institution: "Jatiya Kabi Kazi Nazrul Islam University" },
];

export type Strand = { title: string; items: string[]; note: string };
/** Interest names are the university profile's own wording. Grouping them into strands is an editorial arrangement. */
export const strands: Strand[] = [
  { title: "Second-language learning", items: ["Second Language Reading", "Second Language Writing", "Second Language Acquisition (SLA)"], note: "How learners build reading and writing in an additional language." },
  { title: "Teaching and teacher education", items: ["Teacher Education", "Lesson Planning", "Multiple Intelligence (MI)"], note: "How English teachers are prepared, and how lessons are designed." },
  { title: "The learner as a thinker", items: ["Critical Thinking", "Social Emotional Learning (SEL)"], note: "Thinking and wellbeing as part of language learning." },
  { title: "Language for a purpose", items: ["English for Specific Purposes (ESP)"], note: "English taught for particular academic and professional needs." },
];

export type PubType = "journal" | "chapter" | "book" | "conference" | "other";
export type Publication = {
  id: string; year: number; type: PubType; title: string; authors: string[]; venue: string;
  detail?: string; doi?: string; url?: string;
};
/** Empty on purpose: no publication has been verified. Add entries here and /publications renders them grouped by year. */
export const publications: Publication[] = [];

export const typeLabel: Record<PubType, string> = {
  journal: "Journal article", chapter: "Book chapter", book: "Book", conference: "Conference paper", other: "Other",
};

export type Pending = { label: string; ask: string };
/** What the portfolio is waiting on, by page. Shown as marginal notes; mirrored in VERIFICATION.md. */
export const pending = {
  teaching: [
    { label: "Courses taught", ask: "Course titles and the semesters they were taught." },
    { label: "Teaching approach", ask: "A short statement, in the lecturer's own words." },
    { label: "Supervision and mentoring", ask: "Only if applicable." },
  ],
  activities: [
    { label: "Conferences", ask: "Title, event, place and year of each presentation." },
    { label: "Seminars and workshops", ask: "Whether attended, convened or led." },
    { label: "Academic service", ask: "Committee and departmental roles." },
    { label: "Awards and grants", ask: "Name, body and year." },
    { label: "Research projects", ask: "Title, role, collaborators and status." },
  ],
  cv: [
    { label: "Employment history", ask: "Positions and dates beyond the current post." },
    { label: "Degree years and thesis titles", ask: "Year of each degree and any thesis or dissertation title." },
    { label: "Memberships", ask: "Professional bodies and associations." },
  ],
} satisfies Record<string, Pending[]>;

export const sources = { checked: "4 October 2026", profile: links.facultyProfile } as const;
