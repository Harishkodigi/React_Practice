import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import { useContext } from "react";

const About = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      <h1>About</h1>
      <h2>This is a about Page </h2>
      <User name={loggedInUser} Location="Muttala" Contact=" @HarishKodigi" />
    </div>
  );
};

export default About;
