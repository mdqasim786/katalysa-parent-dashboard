export interface Student {
  id: string;
  parentId: string;
  name: string;
  class: string;
  status: "active" | "inactive" | "graduated" | "transferred";
}
