
const heading = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" }), [React.createElement("h1", {}, "am h1 tag !"), React.createElement("h2", {}, "am h2 tag !")]],
    [React.createElement("div", { id: "child1" }), [React.createElement("h1", {}, "am h1 tag !"), React.createElement("h2", {}, "am h2 tag !")]
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

console.log(heading)
