import React from "react";
import { AiFillPhone, AiOutlineMail,AiFillEnvironment } from "react-icons/ai";

import "../styles/components/informationcontainer.sass";

const InformationContainer: React.FC  = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiFillPhone id="phone-icon"/>
        <div>
           <h3>Telefone</h3>
           <p>+55 55 99928-3747</p>
        </div>
      </div>
      
      <div className="info-card">
          <AiOutlineMail id="email-icon"/>
          <div>
            <h3>Email</h3>
            <p>vitorujleal@gmail.com</p>
          </div>
      </div>

      <div className="info-card">
          <AiFillEnvironment id="pin-icon"/>
          <div>
            <h3>Localização</h3>
            <p>Tijucas, SC, Brasil</p>
          </div>
      </div>
  </section>
  );
};
  export default InformationContainer;