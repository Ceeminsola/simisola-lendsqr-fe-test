import "./header.scss";
import logo from "../../../assets/images/logo.svg";
import profile from "../../../assets/images/profile.svg";
import searchIcon from "../../../assets/icons/search.svg";
import bellIcon from "../../../assets/icons/bell.svg";
import dropdownIcon from "../../../assets/icons/dropdown.svg";

import type { Dispatch, SetStateAction } from "react";

import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ }: HeaderProps) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <header className="header">
      {/* LEFT */}
      <div className="header__left">
        <img src={logo} alt="logo" className="header__logo" />

        <div className="header__search">
          <input type="text" placeholder="Search for anything" />
          <button>
            <img src={searchIcon} alt="search" />
          </button>
        </div>
      </div>

      {/* RIGHT */}
      <div className="header__right">
        <a href="/">Docs</a>

        <button className="header__bell">
          <img src={bellIcon} alt="bell" />
        </button>

        <div
          className="header__profile"
          onClick={() => setShowDropdown(!showDropdown)}
          ref={dropdownRef}
        >
          <img src={profile} alt="profile" />

          <span>Adedeji</span>

          <span>
            <img src={dropdownIcon} alt="dropdown" />
          </span>

          {showDropdown && (
            <div className="header__dropdown">
              <div className="header__dropdown-user">
                <img src={profile} alt="profile" />
                <div>
                  <h4>Adedeji</h4>
                  <p>Frontend Engineer</p>
                </div>
              </div>

              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;