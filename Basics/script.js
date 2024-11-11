import React from "react";
import ReactDOM from "react-dom/client";

/*
<div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div>

*/

const parent = React.createElement(
	"div",
	{
		id: "parent",
	},
	React.createElement(
		"div",
		{ id: "child" },
		React.createElement("h1", {}, "Inner Child")
	)
);

const parent2 = React.createElement(
	"div",
	{
		id: "parent",
	},
	React.createElement("div", { id: "child" }, [
		React.createElement("h1", {}, "Inner Child1"),
		React.createElement("h2", {}, "Inner Child2"),
	])
);

const heading = React.createElement(
	"h1",
	{
		id: "heading",
		xyz: "Abc",
	},
	"Hello World"
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent2);
