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
    id: 'javascript',
    name: 'JavaScript',
    icon: <BiLogoJavascript />,
    description:"Desenvolvimento de projetos frontend pessoais e profissionais"
  },
  {
    id:'typescript',
    name: 'TypeScript',
    icon: <BiLogoTypescript />,
    description:"Desenvolvimento de projetos frontend pessoais e profissionais"
  },

  {
    id: 'html5',
    name: 'HTML5',
    icon: <DiHtml5 />,
    description:"Desenvolvimento de componentes para aplicaçoes frontend"
  },
  {
    id: 'css3',
    name: 'CSS3',
    icon: <DiCss3 />,
    description:"Estilização de compontentes em aplicaçoes frontend responsivas"
  },
  {
    id: 'react',
    name: 'React',
    icon: <DiReact />,
    description:"Desenvolvimento de projetos frontend pessoais e profissionais utilizando Styled Components e SASS"
  },
  {
    id: 'ruby',
    name: 'Ruby',
    icon: <DiRuby />,
    description:"Desenvovimento de pequenas soluçoes em software, correções de bugs em backend"
  },
  {
    id: 'nodejs',
    name: 'Node.JS',
    icon: <DiNodejsSmall />,
    description:"Desenvolimento de pequenas APIs para servir o frontend alem de algumas operaçoes de baixa complexidade"
  },

  {
    id: 'mysql',
    name: 'MySQL',
    icon: <DiMysql />,
    description:"Criação e manipulação de dados em softwares ERP"
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    icon: <DiPostgresql />,
    description:" Utilização de BD em docker para aplicações web"
  },
  {
    id: 'n8n',
    name: 'N8N',
    icon: <SiN8N />,
    description:"Automações de processos entre diferentes plataformas por meio de API, Cron ou disparo de gatilhos"
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
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer
