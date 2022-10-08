/* global React ReactDOM */ const Pet = (props)=>{
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed)
    ]);
};
const App = ()=>{
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me!"),
        React.createElement(Pet, {
            name: "Azabache",
            animal: "Dog",
            breed: "Alsatian"
        }),
        React.createElement(Pet, {
            name: "Pandora",
            animal: "Cat",
            breed: "Mixed"
        }),
        React.createElement(Pet, {
            name: "Panchita",
            animal: "Dog",
            breed: "Mixed"
        })
    ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));

//# sourceMappingURL=index.816e7b21.js.map
