import "./skeleton-loader.scss";

const SkeletonLoader = () => {
  return (
    <div className="skeleton-table">
      {/* HEADER */}
      <div className="skeleton-table__header">
        <div className="skeleton-table__cell skeleton-table__cell--small"></div>
        <div className="skeleton-table__cell skeleton-table__cell--small"></div>
        <div className="skeleton-table__cell"></div>
        <div className="skeleton-table__cell"></div>
        <div className="skeleton-table__cell"></div>
        <div className="skeleton-table__cell skeleton-table__cell--tiny"></div>
        <div className="skeleton-table__cell skeleton-table__cell--circle"></div>
      </div>

      {Array.from({ length: 10 }).map((_, index) => (
        <div className="skeleton-table__row" key={index}>
          <div className="skeleton-table__cell skeleton-table__cell--small"></div>

          <div className="skeleton-table__cell skeleton-table__cell--medium"></div>

          <div className="skeleton-table__cell"></div>

          <div className="skeleton-table__cell skeleton-table__cell--medium"></div>

          <div className="skeleton-table__cell"></div>

          <div className="skeleton-table__cell skeleton-table__cell--tiny"></div>

          <div className="skeleton-table__cell skeleton-table__cell--circle"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;