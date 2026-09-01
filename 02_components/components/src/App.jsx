import JSX from "./components/01jsx";
import Fragments from "./components/02_Fragments ";
import All from "./components/03_functional";
import ClassComponent from "./components/04_class";

const App = () => {
  return (
    <>
      <h1>hello app</h1>
      <JSX />
      <Fragments />
      <All />
      <ClassComponent />
    </>
  );
};

export default App;
