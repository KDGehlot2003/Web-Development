import "./App.css";
import ClassComponent from "./Componenets/ClassComponent";
import FunctionComponent from "./Componenets/FunctionComponent";
import Click from "./Componenets/EventHandling/Click";
import Person from "./Componenets/Person";
import WindowResize from "./Componenets/EventHandling/WindowResize";
import Counter from "./Componenets/EventHandling/Counter";

function App() {
  return (
    <>
      {/* <FunctionComponent />
      <ClassComponent /> */}

      {/* <Person name="Kshitij" age={33} />
      <Person name="Archit" age={35} /> */}

      <Click message= "Welcome to React"/>
      <WindowResize />
      <Counter />
    </>
  );
}

export default App;
