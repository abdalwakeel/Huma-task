interface EmptyStateProps {
  message?: string;
}

const EmptyState = ({ message = "No data found" }: EmptyStateProps) => {
  return <div className="empty-state">{message}</div>;
};

export default EmptyState;
