import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      count: 0,
    };

    console.log("consturctor");
  }

  render() {
    const { name, Location, Contact } = this.props;
    const { count } = this.state;

    console.log("render");
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment
        </button>
        <h2>Name : {name}</h2>
        <h3>Location : {Location}</h3>
        <h4>Contact:{Contact}</h4>
      </div>
    );
  }
}

export default UserClass;
