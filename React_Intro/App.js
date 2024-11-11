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
//3 arguments
//1st argument: type of the element
//2nd argument: attributes (like id, className,etc.) We can give anything as a attribute
//3rd argument: child elements root.render(heading);

//At the end heading is a object console.log(heading)
console.log(heading);
console.log(parent);
//React Element ->heading
//React Element is a javascript object
//root.render(heading)->we are passing a react element
//root.render will take the javascript object and it will take this object and create the h1 tag and put that up inside that root element
//Convert the h1 tag and render it in the root
//React Element returns the object

//ReactElement(Object)=>HTML(Browser understands);
//While its rendering on the DOM its converted into html
root.render(parent2);

//To avoid the complexity due to React.createElement complex structre we have jsx

//We do root.render
/*
put the parent in the root tag
Suppose if something already exists in the root tag 
then if we do root.render Now
    React will update the root tag with the new parent.
    It will replaced by the parent
    But it will happen quickly
    We can see that old content for a millisecond 
    afterwards it will replaced by the new appended parent

    Whatever tags in the root will replaced by the render method
    We don't have to worry about creating new HTML tags or updating existing ones
    React takes care of it internally

    Because it will go line by line 
    First it will print whatever in the root tag
    Then it will load React
    Then it will load ReactDOM
    Then it will load javascript
    Then it will React root.render replace not appended

    React is working inside the root tag
    But whatever above the root tag
    and whatever below the root tag
    will not be repalced they stays the same

    Because React is only working inside the div id root
    Everything that we render will be render inside the root element
    The other portion of the HTML works same

    Library   - React can be applied to small portion
                Works in the place where we use it
                It can work independently work on small portion of our app
    Framework - Require us to create whole app with the framework


    React can be used in the whole page or small page also
    or small part also 
*/
