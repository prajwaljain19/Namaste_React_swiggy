import { LOGO_URL } from "../utils/contents";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinestatus";
import UserContext from "../utils/UserContext";

const Header = () => {

  const [btnNameReact, settnNameReact] = useState("Login");
  console.log("header");

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);
   

  useEffect (() => {
    console.log("useEffect called");

  }, []);

     

  return (
    <div className="flex justify-between bg-white shadow-lg">
      <div className="logo-container">
        <img className="w-30 h-30" src={LOGO_URL} />  
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status: {onlineStatus ? "🙂":"🙃"}
          </li>
          <li className="px-4">
          <Link to="/">Home</Link>
          </li>
          <li className="px-4"> 
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button className="login" 
          onClick={()=>{
            btnNameReact === "Login" 
            ? settnNameReact("Logout") 
            : settnNameReact("Login");
            }}
            >
              {btnNameReact}
            </button>

            <li className="px-4 font-serif">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
 