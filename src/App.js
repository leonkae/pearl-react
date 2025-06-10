import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react/jsx-runtime";
import Nav from "./components/navComponent.js";
import FooterComponent from "./components/footerComponent.js";

// This code imports React and the necessary components and styles for the application.
// It defines a functional component `App` that renders a navigation bar, a title, and a subtitle using JSX syntax. 

const name = "Andre"
const title = <h1>React Website</h1>
function App() {
  const subtitle = <h2>A lesson in JSX</h2>
  return (

    <div>
      <Nav/>
      {title}
      {subtitle}
      <h1>Title is </h1>
      <h2>My name is {name}</h2>
<FooterComponent/>
    </div>
    
  );
}

export default App;
