import { joinClasses } from "@/utils/common";

export interface PaginationProps {
  page: number;
  pageCount: number;
  setPage: (page: number) => void;
  countPerPageSelections: number[];
  countPerPage: number;
  setCountPerPage: (countPerPage: number) => void;
}

/**
 * @param {number} props.page
 * Current page.
 * @param {number} props.pageCount
 * Total page count.
 * @param {(page: number) => void} props.setPage
 * Set current page.
 * @param {number[]} props.countPerPageSelections
 * Count per page selections.
 * @param {number} props.countPerPage
 * Current count per page.
 * @param {(countPerPage: number) => void} props.setCountPerPage
 * Set count per page.
 * @returns {JSX.Element}
 * @constructor
 * @description
 * Pagination component.
 */
const Pagination: React.FC<PaginationProps> = (props): JSX.Element => {
  const pageSelections = Array.from({ length: props.pageCount }, (_, i) => i);

  return (
    <div className="flex flex-row-reverse gap-2 p-2">
      <select
        className="select select-sm rounded bg-base-200 text-sm font-semibold"
        onChange={(e) => {
          props.setCountPerPage(Number(e.target.value));
          props.setPage(0);
        }}
      >
        {props.countPerPageSelections.map((count) => (
          <option key={count} value={count}>
            {count}
          </option>
        ))}
      </select>
      <div className="join rounded">
        {props.pageCount > 1 &&
          pageSelections.map((i) => (
            <button
              key={i}
              className={joinClasses(
                "btn join-item btn-sm",
                props.page === i ? "btn-active" : "",
              )}
              onClick={() => {
                props.setPage(i);
              }}
            >
              {i + 1}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Pagination;
