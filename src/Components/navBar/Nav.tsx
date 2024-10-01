import React, { useEffect, useState } from "react";
import "./Nav.css";
import { Menu, MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Nav: React.FC<{ language: boolean }> = ({ language }) => {
  const [menu, setMenu] = useState<null | HTMLElement>(null);
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState<any>();

  const navigate = useNavigate();

  const open = Boolean(menu);

  const handleClick = (event: any) => {
    setMenu(event.currentTarget);
  };
  const handleClose = (key: string) => {
    if (key == "register") navigate("/login");
    setMenu(null);
  };

  const logout = () => {
    setIsLogin(false);
    localStorage.removeItem("user");
    setMenu(null);
  };

  useEffect(() => {
    let user = localStorage?.getItem("user");
    if (user) {
      setUserData(JSON.parse(user));
      setIsLogin(true);
    } else setIsLogin(false);
  }, [isLogin]);

  return (
    <>
      <div className="navContainer">
        <div className="left">
          <Link to="/home">
            <div className="logo">
              <img src="/ir_uts.png" width={40} height={40} />
            </div>
          </Link>
          <div className="containt">
            <h4>UTS</h4>
            <p>IR Unreserved Ticketing</p>
          </div>
        </div>
        <div className="right">
          {language && (
            <div onClick={handleClick} className="language">
              <img src="/language.png" width={45} height={50} />
            </div>
          )}
          {isLogin ? (
            <Link to="/login">
              <div className="login">
                <img src="/notification_bell_uts.png" width={35} height={35} />
              </div>
            </Link>
          ) : (
            <Link to="/login">
              <div className="login">
                <img src="/login_btn_uts.png" width={35} height={35} />
              </div>
            </Link>
          )}
          <div className="menu" onClick={handleClick}>
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </div>
        {isLogin ? (
          <Menu
            id="basic-menu"
            anchorEl={menu}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            sx={{ borderRadius: 0 }}
          >
            <MenuItem onClick={() => handleClose("userID")}>
              UserID: {userData?.phoneNo}
            </MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
          </Menu>
        ) : (
          <Menu
            id="basic-menu"
            anchorEl={menu}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            sx={{ borderRadius: 0 }}
          >
            <MenuItem onClick={() => handleClose("register")}>
              Registration
            </MenuItem>
            <MenuItem onClick={() => handleClose("notification")}>
              Notification
            </MenuItem>
          </Menu>
        )}
      </div>
    </>
  );
};

export default Nav;
