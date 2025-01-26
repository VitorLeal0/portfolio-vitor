import React from 'react';
import { FaLinkedin,FaGithub ,FaInstagram } from 'react-icons/fa';
import '../styles/components/socialNetworks.sass'

const socialNetworks=[
  {
    name:"LinkedIn",
    url:"https://www.linkedin.com/in/vitor-leal-1306a9b6/",
    icon:<FaLinkedin/>
  },
  {
    name:"Github",
    url:"https://www.github.com/vitorleal0",
    icon:<FaGithub/>
  },
  {
    name:"Instagram",
    url:"https://www.instagram.com/vitorleeal/",
    icon:<FaInstagram/>
  }
]
const SocialNetworks: React.FC = () => {
  return (
    <section id="socialNetworks">
{socialNetworks.map((network,index)=>(
  <a href={network.url} className='social-btn' id={network.name} key={index} target="_blank" rel="noreferrer">
    {network.icon}
    </a>
  ))}
    </section>
  );
}

export default SocialNetworks;