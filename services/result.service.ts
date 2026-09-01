import api from "./api";
import { StudentResult } from "@/types/result";
import { mockResults } from "@/mock/data";

const USE_MOCK = true;

export async function getResultsByStudent(studentId: string): Promise<StudentResult> {
  if (USE_MOCK) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = mockResults[studentId];
        if (result) resolve(result);
        else reject(new Error("Results not found"));
      }, 500);
    });
  }
  const response = await api.get<StudentResult>(`/students/${studentId}/results`);
  return response.data;
}
