
import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";
import React from "react";
import Curriculo from "../itens/Currículo_Vitor.pdf"
import Avatar from "../img/Vitor2.jpeg";
import "../styles/components/sidebar.sass"



const Sidebar: React.FC  = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Vitor Leal" />
      <p className="title">Desenvolvedor</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a href={Curriculo} className="btn">Download Curriculo</a>
    </aside>
  );
};
  export default Sidebar;