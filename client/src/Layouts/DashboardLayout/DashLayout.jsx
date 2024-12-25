import React, { useState } from "react";
import "./dashlayout.css";
import { FaInnosoft } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { IoChatboxOutline } from "react-icons/io5";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { MdAddCircleOutline } from "react-icons/md";
import { VscThreeBars } from "react-icons/vsc";
import { ImCross } from "react-icons/im";
const DashLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="dash">
      <div className={`chatList ${isCollapsed ? "collapsed" : ""}`}>
        <button className="toggleBtn" onClick={toggleSidebar}>
          {isCollapsed ? <VscThreeBars /> : <ImCross />}
        </button>
        {!isCollapsed && <span className="title">DASHBOARD</span>}
        <Link to="/dashboard">
          <MdAddCircleOutline style={{ fontSize: "25px" }} />
          {!isCollapsed && "Create a new Chat"}
        </Link>
        <Link to="/">
          <RiDashboardHorizontalLine style={{ fontSize: "25px" }} />
          {!isCollapsed && "Explore Sam AI"}
        </Link>
        <Link to="/">
          <MdOutlinePermContactCalendar style={{ fontSize: "25px" }} />
          {!isCollapsed && "Contact"}
        </Link>
        {!isCollapsed && <hr />}
        {!isCollapsed && <span className="title">RECENT CHATS</span>}
        <div className="list">
          <Link to={"/dashboard/chat/1"}>
            <IoChatboxOutline style={{ fontSize: "20px" }} />
            {!isCollapsed && "what is React Js"}
          </Link>
          <Link to={"/dashboard/chat/1"}>
            <IoChatboxOutline style={{ fontSize: "20px" }} />
            {!isCollapsed && "how are you sam"}
          </Link>
          {/* Add more recent chats here */}
        </div>
        {!isCollapsed && <hr />}
        {!isCollapsed && (
          <div className="upgrade">
            <FaInnosoft style={{ fontSize: "50px" }} />
            <div className="texts">
              <span>Upgrade to Sam AI Pro</span>
              <span>Get unlimited access to all features</span>
            </div>
          </div>
        )}
        {isCollapsed && <FaInnosoft style={{ fontSize: "40px", alignSelf:"center", marginTop:"45vh" }} />}
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default DashLayout;
