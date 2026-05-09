import "./table-actions.scss";

import { useNavigate } from "react-router-dom";

import type { User } from "../../../types/user";
import viewIcon from "../../../assets/icons/view.svg";
import blacklistIcon from "../../../assets/icons/blacklist.svg";
import activateIcon from "../../../assets/icons/activate.svg";

interface Props {
  user: User;
}

const TableActions = ({ user }: Props) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    localStorage.setItem("selectedUser", JSON.stringify(user));

    navigate(`/users/${user.id}`);
  };

  return (
    <div className="table-actions">
      <button onClick={handleViewDetails}>
        <img src={viewIcon} alt="View Details" />
        View Details

      </button>

      <button>
        <img src={blacklistIcon} alt="Blacklist User" />

        Blacklist User
      </button>

      <button>
        <img src={activateIcon} alt="Activate User" />
        Activate User
      </button>
    </div>
  );
};

export default TableActions;