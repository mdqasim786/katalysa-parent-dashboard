import api from "./api";
import { Parent } from "@/types/parent";
import { Student } from "@/types/student";
import { mockParent, mockStudents } from "@/mock/data";

const USE_MOCK = true;

export async function getParent(parentId: string): Promise<Parent> {
  if (USE_MOCK) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockParent), 500);
    });
  }
  const response = await api.get<Parent>(`/parents/${parentId}`);
  return response.data;
}

export async function getStudentsByParent(parentId: string): Promise<Student[]> {
  if (USE_MOCK) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const students = mockStudents.filter((s) => s.parentId === parentId);
        resolve(students);
      }, 500);
    });
  }
  const response = await api.get<Student[]>(`/parents/${parentId}/students`);
  return response.data;
}

export async function getStudent(studentId: string): Promise<Student> {
  if (USE_MOCK) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const student = mockStudents.find((s) => s.id === studentId);
        if (student) resolve(student);
        else reject(new Error("Student not found"));
      }, 500);
    });
  }
  const response = await api.get<Student>(`/students/${studentId}`);
  return response.data;
}
