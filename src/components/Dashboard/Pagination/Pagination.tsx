import "./pagination.scss";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

type PageItem = number | "ellipsis";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: Props) => {
  const getPageItems = (): PageItem[] => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    const pages: PageItem[] = [1];

    if (currentPage <= 4) {
      for (let page = 2; page <= 4; page += 1) {
        pages.push(page);
      }
      pages.push("ellipsis");
    } else if (currentPage >= totalPages - 3) {
      pages.push("ellipsis");
      for (let page = totalPages - 3; page <= totalPages - 1; page += 1) {
        pages.push(page);
      }
    } else {
      pages.push("ellipsis");
      pages.push(currentPage - 1);
      pages.push(currentPage);
      pages.push(currentPage + 1);
      pages.push("ellipsis");
    }

    pages.push(totalPages);

    return pages.filter((item, index, self) => {
      if (item === "ellipsis") return true;
      return self.indexOf(item) === index;
    });
  };

  const pageItems = getPageItems();

  return (
    <div className="pagination">
      <button
        className="pagination__nav"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        ‹
      </button>

      <div className="pagination__pages">
        {pageItems.map((item, index) =>
          item === "ellipsis" ? (
            <span key={`ellipsis-${index}`} className="pagination__ellipsis">
              …
            </span>
          ) : (
            <button
              key={item}
              className={item === currentPage ? "active" : ""}
              onClick={() => onPageChange(item)}
            >
              {item}
            </button>
          ),
        )}
      </div>

      <button
        className="pagination__nav"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        ›
      </button>
    </div>
  );
};

export default Pagination;