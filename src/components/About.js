
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return(
        <div>
            <h1>About</h1>
            <h2>This is a about Page </h2>
            <User name="Harish Kumar" Location="Muttala" Contact=" @HarishKodigi"/>
            <UserClass name="Harish Kumar" Location="Muttala" Contact=" @Harish" />
        </div>
    )
};

export default About;