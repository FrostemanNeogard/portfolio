import $ from 'jquery'
import { useEffect } from 'react'

export default function PreviousWork() {

  useEffect(() => {
    const handleOnMouseMove = e => {
      let { currentTarget: target } = e;
      let constraint = 100;
      let box = target.getBoundingClientRect();
      let calcX = -(e.clientY - box.y - (box.height / 2)) / constraint;
      let calcY = (e.clientX - box.x - (box.width / 2)) / constraint;
      let calcShine = 77 + ((calcY) + (calcX)) * 2;
      $(':root').css('--mouse-x', `${calcX}deg`);
      $(':root').css('--mouse-y', `${calcY}deg`);
      $(':root').css('--shine-strength', `${calcShine}%`);
    }
  
    for (const card of document.querySelectorAll(".project-card-parent")) {
      card.onmousemove = e => handleOnMouseMove(e);
    }
  })

  return(
    <section className='previouswork-section main-section'>
      <h1 className='center-aligned section-header'>Previous Work</h1>
      <div className="projects-section">
        <ProjectCard 
          name="CloudBackend" 
          img="https://www.cloudbackend.com/assets/img/db-database.png"
        />
        <ProjectCard 
          name="TekkenHub" 
          img="https://user-images.githubusercontent.com/77246706/195115695-d4c6b5d3-0bd3-468a-9d62-e491cfa9fc1a.png"
        />
        <ProjectCard
          name="Portfolio"
          img="https://media.discordapp.net/attachments/882893970915610624/1036592757503967282/unknown.png?width=1319&height=676"
        />
      </div>
    </section>
  )
}

function ProjectCard(props) {
  return(
    <article className='project-card-parent'>
      <div className="project-card-content">
        <img src={props.img} alt={props.name} />
        <h2>{props.name}</h2>
      </div>
    </article>
  )
}