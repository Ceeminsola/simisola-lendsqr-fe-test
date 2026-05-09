import "./skeleton-loader.scss";

const SkeletonLoader = () => {
  return (
    <div className="skeleton-table">
      {Array.from({ length: 10 }).map((_, index) => (
        <div className="skeleton-table__row" key={index}>
          {Array.from({ length: 6 }).map((_, idx) => (
            <div className="skeleton-table__cell" key={idx}></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;