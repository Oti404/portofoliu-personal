export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  tech: string;
  type: 'job' | 'education' | 'event';
}

export const experienceData: Experience[] = [
  // --- TIER 1: INTERNSHIPS ---
  {
    company: 'Globant',
    role: 'Frontend Developer Intern',
    period: 'Nov 17, 2025 - Jan 16, 2026',
    description: [
      'Developed "Movie World" - a comprehensive platform for exploring movies and TV shows.',
      'Complex integration with TMDB API for real-time data fetching.',
      'Implemented advanced search, filtering, and pagination functionalities.',
      'Focused on application architecture, state management, and responsive UI/UX.'
    ],
    tech: 'JavaScript, TypeScript, CSS3, REST API, Git',
    type: 'job'
  },

  // --- TIER 2: INDUSTRY EVENTS & WORKSHOPS ---
  {
    company: 'MHP Romania',
    role: 'Technical Workshop Participant',
    period: 'Nov 15, 2024',
    description: [
      'Intensive Workshop: "React vs Angular" - Comparative analysis of modern frameworks.',
      'Deep dive into Component-Based Architecture concepts.',
      'First technical contact with development standards within MHP.'
    ],
    tech: 'React, Angular concepts, Frontend Architecture',
    type: 'event'
  },
  {
    company: 'Principal33',
    role: 'Noaptea Companiilor - Participant',
    period: 'Oct 22, 2024',
    description: [
      'First direct interaction with the IT industry in Cluj-Napoca.',
      'Participated in sessions regarding internal projects and organizational culture.',
      'Networked with industry professionals to understand current market demands.'
    ],
    tech: 'Networking, Industry Awareness, Soft Skills',
    type: 'event'
  },

  // --- TIER 3: EDUCATION ---
  {
    company: 'Babeș-Bolyai University',
    role: 'Bachelor Student - Computer Science',
    period: 'Oct 2024 - Present',
    description: [
      'Semester 1: Computer Systems Architecture (ASM), Fundamentals of Programming (Python), Algebra, Analysis, Logic.',
      'Semester 2: Data Structures & Algorithms, OOP (C++), Operating Systems (Linux), Geometry, Dynamical Systems.',
      'Semester 3: Advanced Programming Methods (Java), Databases (SQL), Computer Networks, Probability & Statistics, Logic & Functional Programming.'
    ],
    tech: 'C++, Python, Java, SQL, Linux, Algorithms',
    type: 'education'
  },
  {
    company: '"Spiru Haret" National Computer Science College',
    role: 'High School Student - Math & Informatics',
    period: '2020 - 2024',
    description: [
      'Intensive Mathematics and Informatics specialization.',
      'Solid foundation in Graph Algorithms and Data Structures.',
      'Practical projects in web development and databases.'
    ],
    tech: 'C++, HTML, CSS, SQL, Algorithms, Microsoft Office',
    type: 'education'
  },
  {
    company: 'School in Greece (Elefsina)',
    role: 'Student (International Experience)',
    period: '2013 - 2018',
    description: [
      'Integration into an international educational system and adaptation to a new culture.',
      'Developed linguistic skills (Greek - Upper-Intermediate Level).',
      'Gained a multicultural perspective and flexibility in thinking.'
    ],
    tech: 'Greek Language, Adaptability, Intercultural Skills',
    type: 'education'
  }
];
