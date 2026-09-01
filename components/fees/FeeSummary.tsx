import { Fee } from "@/types/fee";
import Card from "@/components/common/Card";
import SectionTitle from "@/components/common/SectionTitle";
import FeeCard from "./FeeCard";
import PaymentStatus from "./PaymentStatus";
import Loading from "@/components/common/Loading";
import ErrorState from "@/components/common/ErrorState";
import EmptyState from "@/components/common/EmptyState";

interface FeeSummaryProps {
  fees: Fee | null;
  loading: boolean;
  error: string | null;
}

export default function FeeSummary({ fees, loading, error }: FeeSummaryProps) {
  if (loading) {
    return (
      <Card>
        <SectionTitle>Fee Summary</SectionTitle>
        <Loading />
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <SectionTitle>Fee Summary</SectionTitle>
        <ErrorState message={error} />
      </Card>
    );
  }

  if (!fees) {
    return (
      <Card>
        <SectionTitle>Fee Summary</SectionTitle>
        <EmptyState message="No fee information available." />
      </Card>
    );
  }

  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <SectionTitle className="mb-0">Fee Summary</SectionTitle>
        <PaymentStatus status={fees.paymentStatus} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <FeeCard
          label="Total Fees"
          amount={fees.totalFees}
          icon={
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
        <FeeCard
          label="Amount Paid"
          amount={fees.amountPaid}
          icon={
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
        <FeeCard
          label="Outstanding Balance"
          amount={fees.outstandingBalance}
          icon={
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
          }
        />
      </div>
    </Card>
  );
}
