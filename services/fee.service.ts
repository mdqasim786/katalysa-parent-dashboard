import api from "./api";
import { Fee } from "@/types/fee";
import { mockFees } from "@/mock/data";

const USE_MOCK = true;

export async function getFeesByStudent(studentId: string): Promise<Fee> {
  if (USE_MOCK) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const fee = mockFees[studentId];
        if (fee) resolve(fee);
        else reject(new Error("Fee information not found"));
      }, 500);
    });
  }
  const response = await api.get<Fee>(`/students/${studentId}/fees`);
  return response.data;
}
