
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import { PiCoffeeBeanFill } from "react-icons/pi";


import "./styles/components/app.sass";

function App() {

  return (
    <>
      <div id="portfolio">
      <h1> <PiCoffeeBeanFill /> Vitor Udo João Leal </h1>
      <Sidebar/>
      <MainContent/>
      </div>
    </>
  )
}

export default App
