import "./status-badge.scss";

interface Props {
  status: string;
}

const StatusBadge = ({ status }: Props) => {
  return (
    <span className={`status-badge status-badge--${status.toLowerCase()}`}>
      {status}
    </span>
  );
};

export default StatusBadge;