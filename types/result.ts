export interface SubjectResult {
  subject: string;
  ca1: number;
  ca2: number;
  exam: number;
  total: number;
  percentage: number;
  grade: string;
  remark: string;
}

export interface StudentResult {
  studentId: string;
  term: string;
  session: string;
  subjects: SubjectResult[];
  overallAverage: number;
  classPosition: string;
}
