"use client";

import { useParentDashboard } from "@/hooks/useParentDashboard";
import Header from "@/components/layout/Header";
import Container from "@/components/layout/Container";
import StudentSelector from "@/components/student/StudentSelector";
import FeeSummary from "@/components/fees/FeeSummary";
import ResultsTable from "@/components/results/ResultsTable";
import SectionTitle from "@/components/common/SectionTitle";
import Loading from "@/components/common/Loading";
import ErrorState from "@/components/common/ErrorState";
import EmptyState from "@/components/common/EmptyState";

export default function Home() {
  const {
    parent,
    students,
    selectedStudent,
    selectedStudentId,
    fees,
    results,
    loading,
    errors,
    selectStudent,
  } = useParentDashboard();

  if (loading.parent || loading.students) {
    return (
      <>
        <Header parentName="..." />
        <Container>
          <Loading />
        </Container>
      </>
    );
  }

  if (errors.parent && !parent) {
    return (
      <>
        <Header parentName="..." />
        <Container>
          <ErrorState message={errors.parent} />
        </Container>
      </>
    );
  }

  if (!parent) {
    return (
      <>
        <Header parentName="..." />
        <Container>
          <EmptyState message="No parent data found." />
        </Container>
      </>
    );
  }

  return (
    <>
      <Header parentName={parent.name} />
      <Container>
        <div className="space-y-6">
          <div>
            <SectionTitle>My Children</SectionTitle>
            {students.length === 0 && !loading.students ? (
              <EmptyState message="No children registered." />
            ) : (
              <StudentSelector
                students={students}
                selectedStudentId={selectedStudentId}
                onSelect={selectStudent}
              />
            )}
          </div>

          {selectedStudent && (
            <div className="grid grid-cols-1 gap-6">
              <FeeSummary
                fees={fees}
                loading={loading.fees}
                error={errors.fees}
              />
              <ResultsTable
                results={results}
                loading={loading.results}
                error={errors.results}
              />
            </div>
          )}

          {!selectedStudent && students.length > 0 && (
            <EmptyState message="Select a child to view their details." />
          )}
        </div>
      </Container>
    </>
  );
}
