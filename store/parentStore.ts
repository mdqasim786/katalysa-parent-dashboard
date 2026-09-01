import { create } from "zustand";
import { Parent } from "@/types/parent";
import { Student } from "@/types/student";
import { Fee } from "@/types/fee";
import { StudentResult } from "@/types/result";
import { getParent, getStudentsByParent } from "@/services/parent.service";
import { getFeesByStudent } from "@/services/fee.service";
import { getResultsByStudent } from "@/services/result.service";

interface DashboardState {
  parent: Parent | null;
  students: Student[];
  selectedStudentId: string | null;
  fees: Fee | null;
  results: StudentResult | null;
  loading: {
    parent: boolean;
    students: boolean;
    fees: boolean;
    results: boolean;
  };
  errors: {
    parent: string | null;
    students: string | null;
    fees: string | null;
    results: string | null;
  };
  fetchParent: (parentId: string) => Promise<void>;
  fetchStudents: (parentId: string) => Promise<void>;
  selectStudent: (studentId: string) => Promise<void>;
  fetchFees: (studentId: string) => Promise<void>;
  fetchResults: (studentId: string) => Promise<void>;
}

export const useParentStore = create<DashboardState>((set, get) => ({
  parent: null,
  students: [],
  selectedStudentId: null,
  fees: null,
  results: null,
  loading: {
    parent: false,
    students: false,
    fees: false,
    results: false,
  },
  errors: {
    parent: null,
    students: null,
    fees: null,
    results: null,
  },

  fetchParent: async (parentId: string) => {
    set((state) => ({
      loading: { ...state.loading, parent: true },
      errors: { ...state.errors, parent: null },
    }));
    try {
      const parent = await getParent(parentId);
      set({ parent });
    } catch (error) {
      set((state) => ({
        errors: {
          ...state.errors,
          parent: error instanceof Error ? error.message : "Failed to load parent information",
        },
      }));
    } finally {
      set((state) => ({
        loading: { ...state.loading, parent: false },
      }));
    }
  },

  fetchStudents: async (parentId: string) => {
    set((state) => ({
      loading: { ...state.loading, students: true },
      errors: { ...state.errors, students: null },
    }));
    try {
      const students = await getStudentsByParent(parentId);
      set({ students });
      if (students.length > 0 && !get().selectedStudentId) {
        get().selectStudent(students[0].id);
      }
    } catch (error) {
      set((state) => ({
        errors: {
          ...state.errors,
          students: error instanceof Error ? error.message : "Failed to load students",
        },
      }));
    } finally {
      set((state) => ({
        loading: { ...state.loading, students: false },
      }));
    }
  },

  selectStudent: async (studentId: string) => {
    set({ selectedStudentId: studentId, fees: null, results: null });
    await Promise.all([get().fetchFees(studentId), get().fetchResults(studentId)]);
  },

  fetchFees: async (studentId: string) => {
    set((state) => ({
      loading: { ...state.loading, fees: true },
      errors: { ...state.errors, fees: null },
    }));
    try {
      const fees = await getFeesByStudent(studentId);
      set({ fees });
    } catch (error) {
      set((state) => ({
        errors: {
          ...state.errors,
          fees: error instanceof Error ? error.message : "Failed to load fee information",
        },
      }));
    } finally {
      set((state) => ({
        loading: { ...state.loading, fees: false },
      }));
    }
  },

  fetchResults: async (studentId: string) => {
    set((state) => ({
      loading: { ...state.loading, results: true },
      errors: { ...state.errors, results: null },
    }));
    try {
      const results = await getResultsByStudent(studentId);
      set({ results });
    } catch (error) {
      set((state) => ({
        errors: {
          ...state.errors,
          results: error instanceof Error ? error.message : "Failed to load results",
        },
      }));
    } finally {
      set((state) => ({
        loading: { ...state.loading, results: false },
      }));
    }
  },
}));
