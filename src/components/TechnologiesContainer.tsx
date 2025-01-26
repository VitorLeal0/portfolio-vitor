import React from 'react'
import { 
  DiHtml5,
  DiCss3,
  DiReact,
  DiNodejsSmall,
  DiMysql,
  DiPostgresql,
  DiRuby,
 } from 'react-icons/di'
 import { BiLogoTypescript, BiLogoJavascript } from "react-icons/bi";

import '../styles/components/technologiescontainer.sass'
import { SiN8N } from "react-icons/si";

const technologies = [
  {
    id: 'html5',
    name: 'HTML5',
    icon: <DiHtml5 />
  },
  {
    id: 'css3',
    name: 'CSS3',
    icon: <DiCss3 />
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: <BiLogoJavascript />
  },
  {
    id:'typescript',
    name: 'TypeScript',
    icon: <BiLogoTypescript />
  },
  {
    id: 'react',
    name: 'React',
    icon: <DiReact />
  },
  {
    id: 'nodejs',
    name: 'Node.JS',
    icon: <DiNodejsSmall />
  },
  {
    id: 'ruby',
    name: 'Ruby',
    icon: <DiRuby />
  },
  {
    id: 'mysql',
    name: 'MySQL',
    icon: <DiMysql />
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    icon: <DiPostgresql />
  },
  {
    id: 'n8n',
    name: 'N8N',
    icon: <SiN8N />
  },
]

const TechnologiesContainer: React.FC = () => {
  return (
    <section id="technologies-container">
      <h2>Tecnologias</h2>
      <div className='technologies-grid'>
        {technologies.map((tech) => (
          <div  key={tech.id} id={tech.id} className='technology-card'>
            {tech.icon}
            <div className="tecnology-info"> 
              <h3>{tech.name}</h3>
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer
