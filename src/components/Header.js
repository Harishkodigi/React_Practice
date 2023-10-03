import { LOGO_URL } from "../utils/constants";
import { useState ,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus(UserContext);
  
 const {loggedInUser} = useContext(UserContext)


  return (
    <div className="flex justify-between bg-pink-50 shadow-lg mb-2">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL} alt="logo" />
      </div>
      <div className="flex text-center ">
        <ul className="flex p-4 m-4 ">
          <li className="px-4 hover:font-bold bg-slate-100">OnlineStaus : {onlineStatus ? "🔵" : "🔴 "} </li>
          <li className="px-4 hover:font-bold bg-slate-100">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:font-bold bg-slate-100">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 hover:font-bold bg-slate-100">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4 hover:font-bold bg-slate-100">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 hover:font-bold bg-slate-100"><Link to="/grocery">Cart</Link></li>
        
          <li>
         
            <button
              className="px-4 hover:font-bold bg-slate-100 "
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="px-4 hover:font-bold bg-slate-100"><Link to="/grocery">{loggedInUser}</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
