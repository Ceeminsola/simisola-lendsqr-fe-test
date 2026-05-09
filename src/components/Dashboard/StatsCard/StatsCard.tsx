import "./stats-card.scss";

interface StatsCardProps {
  icon: string;
  title: string;
  value: string;
}

const StatsCard = ({
  icon,
  title,
  value,
}: StatsCardProps) => {
  return (
    <div className="stats-card">
      <div className="stats-card__icon">
        <img src={icon} alt={title} />
      </div>

      <p className="stats-card__title">
        {title}
      </p>

      <h3 className="stats-card__value">
        {value}
      </h3>
    </div>
  );
};

export default StatsCard;