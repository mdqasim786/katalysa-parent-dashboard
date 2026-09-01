import { StudentResult } from "@/types/result";
import Card from "@/components/common/Card";
import SectionTitle from "@/components/common/SectionTitle";
import ResultRow from "./ResultRow";
import SummaryCard from "./SummaryCard";
import Loading from "@/components/common/Loading";
import ErrorState from "@/components/common/ErrorState";
import EmptyState from "@/components/common/EmptyState";

interface ResultsTableProps {
  results: StudentResult | null;
  loading: boolean;
  error: string | null;
}

export default function ResultsTable({ results, loading, error }: ResultsTableProps) {
  if (loading) {
    return (
      <Card>
        <SectionTitle>Results</SectionTitle>
        <Loading />
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <SectionTitle>Results</SectionTitle>
        <ErrorState message={error} />
      </Card>
    );
  }

  if (!results) {
    return (
      <Card>
        <SectionTitle>Results</SectionTitle>
        <EmptyState message="No results available." />
      </Card>
    );
  }

  return (
    <Card>
      <SectionTitle>
        Results — {results.term}, {results.session}
      </SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        <SummaryCard
          label="Overall Average"
          value={`${results.overallAverage}%`}
          icon={
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>
          }
        />
        <SummaryCard
          label="Class Position"
          value={results.classPosition}
          icon={
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0116.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-2.27.308 6.023 6.023 0 01-2.27-.308" />
            </svg>
          }
        />
      </div>

      <div className="overflow-x-auto -mx-4 sm:-mx-6 px-4 sm:px-6">
        <table className="w-full min-w-[600px]">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2.5 sm:py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Subject
              </th>
              <th className="text-center py-2.5 sm:py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                CA1
              </th>
              <th className="text-center py-2.5 sm:py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                CA2
              </th>
              <th className="text-center py-2.5 sm:py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Exam
              </th>
              <th className="text-center py-2.5 sm:py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Total
              </th>
              <th className="text-center py-2.5 sm:py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                %
              </th>
              <th className="text-center py-2.5 sm:py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Grade
              </th>
              <th className="text-center py-2.5 sm:py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                Remark
              </th>
            </tr>
          </thead>
          <tbody>
            {results.subjects.map((subject, index) => (
              <ResultRow key={index} subject={subject} />
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
