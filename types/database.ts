export interface EducationEntry {
  id: string;
  created_at?: string;
  institution: string;
  degree: string;
  period: string;
  type: string;
  certificate_path: string | null;
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
}
