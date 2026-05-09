import "./table-filter.scss";
import arrowDownIcon from "../../../assets/icons/arrowdown.svg";
import calendarIcon from "../../../assets/icons/calendar.svg";

const TableFilter = () => {
  return (
    <div className="table-filter">
      <div className="table-filter__field">
        <label>Organization</label>

        <div className="select-wrapper">
        <select>
          <option>Select</option>
        </select>

        <img src={arrowDownIcon} alt="dropdown" />
      </div>
      </div>

      <div className="table-filter__field">
        <label>Username</label>
         
        <input type="text" placeholder="User" />
      </div>

      <div className="table-filter__field">
        <label>Email</label>

        <input type="text" placeholder="Email" />
      </div>

      <div className="table-filter__field">

        <label>Date</label>
        <div className="date-input">
        <input type="date" placeholder="Date" />

        <img src={calendarIcon} alt="calendar" />
      </div>
      </div>

      <div className="table-filter__field">
        <label>Phone Number</label>

        <input type="text" placeholder="Phone Number" />
      </div>

      <div className="table-filter__field">
        <label>Status</label>

       <div className="select-wrapper">
        <select>
          <option>Select</option>
        </select>

        <img src={arrowDownIcon} alt="dropdown" />
      </div>
      </div>

      <div className="table-filter__buttons">
        <button className="reset-btn">
          Reset
        </button>

        <button className="filter-btn">
          Filter
        </button>
      </div>
    </div>
  );
};

export default TableFilter;