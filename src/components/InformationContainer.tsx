import React from "react";
import { AiFillPhone, AiOutlineMail,AiFillEnvironment } from "react-icons/ai";

import "../styles/components/informationcontainer.sass";

const InformationContainer: React.FC  = () => {
  return (
    <section id="information">
      <div className="info-card">
        <a href="https://api.whatsapp.com/send?phone=5555999283747&text=Ol%C3%A1,%20tudo%20bem?" target="_blank"><AiFillPhone id="phone-icon"/></a>
        <div>
           <h3>Telefone</h3>
           <p>+55 55 99928-3747</p>
        </div>
      </div>
      
      <div className="info-card">
      <a href="mailto:vitorujleal@gmail.com" target="_blank" ><AiOutlineMail id="email-icon"/></a>
          <div>
            <h3>Email</h3>
            <p>vitorujleal@gmail.com</p>
          </div>
      </div>

      <div className="info-card">
          <a href="https://maps.app.goo.gl/w1myf8t9qyf6d6qz7" target="_blank"><AiFillEnvironment id="pin-icon"/></a>
          <div>
            <h3>Localização</h3>
            <p>Tijucas, SC, Brasil</p>
          </div>
      </div>
  </section>
  );
};
  export default InformationContainer;