import "./users-table.scss";

import { useState, type ChangeEvent } from "react";

import filterIcon from "../../../assets/icons/filter-results.svg";
import moreIcon from "../../../assets/icons/more-vertical.svg";

import StatusBadge from "../StatusBadge/StatusBadge";
import TableActions from "../TableActions/TableActions";
import TableFilter from "../TableFilter/TableFilter";
import Pagination from "../Pagination/Pagination";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";

import type { User } from "../../../types/user";

interface Props {
  users: User[];
  loading: boolean;
}

const UsersTable = ({ users, loading }: Props) => {
  const [showFilter, setShowFilter] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const [activeDropdown, setActiveDropdown] = useState<
    number | string | null
  >(null);

  const rowsPerPage = 10;

  const totalPages = Math.ceil(users.length / rowsPerPage);

  const startIndex = (currentPage - 1) * rowsPerPage;

  const endIndex = startIndex + rowsPerPage;

  const currentUsers = users.slice(startIndex, endIndex);

  const totalRanges = Math.ceil(totalPages / 10);

  const currentRange = Math.ceil(currentPage / 10);

  const handleRangeChange = (
    event: ChangeEvent<HTMLSelectElement>
  ) => {
    const newRange = Number(event.target.value);

    setCurrentPage((newRange - 1) * 10 + 1);
  };

  return (
    <>
      <div className="users-table">
        <div className="users-table__wrapper">
          <table>
            <thead>
              <tr>
                <th>
                  <div className="table-header">
                    ORGANIZATION

                    <button
                      onClick={() =>
                        setShowFilter(!showFilter)
                      }
                    >
                      <img
                        src={filterIcon}
                        alt="filter"
                      />
                    </button>
                  </div>

                  {showFilter && <TableFilter />}
                </th>

                <th>
                  <div className="table-header">
                    USERNAME

                    <button>
                      <img
                        src={filterIcon}
                        alt="filter"
                      />
                    </button>
                  </div>
                </th>

                <th>
                  <div className="table-header">
                    EMAIL

                    <button>
                      <img
                        src={filterIcon}
                        alt="filter"
                      />
                    </button>
                  </div>
                </th>

                <th>
                  <div className="table-header">
                    PHONE NUMBER

                    <button>
                      <img
                        src={filterIcon}
                        alt="filter"
                      />
                    </button>
                  </div>
                </th>

                <th>
                  <div className="table-header">
                    DATE JOINED

                    <button>
                      <img
                        src={filterIcon}
                        alt="filter"
                      />
                    </button>
                  </div>
                </th>

                <th>
                  <div className="table-header">
                    STATUS

                    <button>
                      <img
                        src={filterIcon}
                        alt="filter"
                      />
                    </button>
                  </div>
                </th>

                <th></th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                  <tr>
                    <td colSpan={7}>
                      <SkeletonLoader />
                    </td>
                  </tr>
                ) : currentUsers.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="empty-state">
                      No users found
                    </td>
                  </tr>
                ) : (
                  currentUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.organization}</td>

                    <td>{user.username}</td>

                    <td>{user.email}</td>

                    <td>{user.phoneNumber}</td>

                    <td>{user.dateJoined}</td>

                    <td>
                      <StatusBadge
                        status={user.status}
                      />
                    </td>

                    <td className="table-actions-cell">
                      <button
                        className="table-actions-trigger"
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === user.id
                              ? null
                              : user.id
                          )
                        }
                      >
                        <img
                          src={moreIcon}
                          alt="more actions"
                        />
                      </button>

                      {activeDropdown === user.id && (
                        <TableActions user={user} />
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {!loading && (
        <div className="users-table__footer">
          <p>
            Showing

            <select
              value={currentRange}
              onChange={handleRangeChange}
              className="users-table__range-select"
            >
              {Array.from(
                { length: totalRanges },
                (_, index) => {
                  const start = index * 10 + 1;

                  const end = Math.min(
                    (index + 1) * 10,
                    users.length
                  );

                  return (
                    <option
                      key={index + 1}
                      value={index + 1}
                    >
                      {start}-{end}
                    </option>
                  );
                }
              )}
            </select>

            out of {users.length}
          </p>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </>
  );
};

export default UsersTable;