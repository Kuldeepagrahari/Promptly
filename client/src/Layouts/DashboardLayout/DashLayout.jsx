import React, { useEffect, useState } from "react";
import "./dashlayout.css";
import { FaInnosoft } from "react-icons/fa";
import { Link, Outlet , useNavigate} from "react-router-dom";
import { IoChatboxOutline } from "react-icons/io5";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { MdAddCircleOutline } from "react-icons/md";
import { useAuth } from "@clerk/clerk-react";
import { VscThreeBars } from "react-icons/vsc";
import { ImCross } from "react-icons/im";
const DashLayout = () => {
  // const { userId, isLoaded } = useAuth();

  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (isLoaded && !userId) {
  //     navigate("/sign-in");
  //   }
  // }, [isLoaded, userId, navigate]);
  // if (!isLoaded) return "Loading...";
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [userchats, setUserchats] = useState([])
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const GiveUserChats = async () => {
    try {
      const response = await fetch("https://samai-backend-bvan.onrender.com/api/userChats",{
        credentials:"include"
      });
      if (response.ok) {
        const data = await response.json(); 
        setUserchats(data[0].chats); 
       
      } else {
        console.error("Failed to fetch user chats:", response.status);
      }
    } catch (error) {
      console.error("Error fetching user chats:", error);
    }
  };

  useEffect(() => {
    GiveUserChats(); 
  }, [navigation]); 

  return (
    <div className="dash">
      <div className={`chatList ${isCollapsed ? "collapsed" : ""}`}>
        <button className="toggleBtn" onClick={toggleSidebar}>
          {isCollapsed ? <VscThreeBars/> : <ImCross />}
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
          {userchats.map((chat, index) => (
            <Link to={`/dashboard/chat/${chat._id}`} key={index}>
              <IoChatboxOutline style={{ fontSize: "20px" }} />
              {!isCollapsed && chat.title}
            </Link>))}


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
        {isCollapsed && <FaInnosoft className="logo-side" style={{ fontSize: "40px", alignSelf: "center", marginTop: "45vh" }} />}
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default DashLayout;
