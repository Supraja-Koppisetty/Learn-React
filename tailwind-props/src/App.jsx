// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-200 p-2 mb-4">Tail Wind</h1>
      <Card companyName="Company Retreats" />
      <Card companyName="Holiday Resorts" />
    </>
  );
}

export default App;
