function Content() {
  return(
    <main>

      <h1>Previous Projects</h1>

      <section>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </section>
    </main>
  )
}

function ProjectCard() {
  return (
    <article>
      <img src="https://user-images.githubusercontent.com/77246706/195115695-d4c6b5d3-0bd3-468a-9d62-e491cfa9fc1a.png" alt="Tekken Hub Homepage" />
      <h3>Project One</h3>
      <p>
        This is some text talking about my project.
        What if I were to make the text a bit longer.
      </p>
    </article>
  )
}

export default Content;