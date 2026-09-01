import { Student } from "@/types/student";
import Badge from "@/components/common/Badge";

interface StudentStatusProps {
  status: Student["status"];
}

const statusLabels: Record<Student["status"], string> = {
  active: "Active",
  inactive: "Inactive",
  graduated: "Graduated",
  transferred: "Transferred",
};

export default function StudentStatus({ status }: StudentStatusProps) {
  return <Badge variant={status}>{statusLabels[status]}</Badge>;
}
