import $ from 'jquery'

function Content() {

  // var $document = $(document);

  // $document.mousemove((e) => {
  //   var mouseX = parseInt(e.pageX);
  //   var mouseY = parseInt(e.pageY);
  //   $(".test").css("--mouse-x", mouseX + "deg")
  //   $(".test").css("--mouse-y", -mouseY + "deg")
  // })


  const handleOnMouseMove = e => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.left;
    
    $(target).css("--mouse-x", `${x}deg`);
    $(target).css("--mouse-y", `${y}deg`);
  }
  for (const card of document.querySelectorAll(".test")) {
    card.onmousemove = e => handleOnMouseMove(e);
  }


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

  return(
    <article className="test">
      <img src="https://www.cloudbackend.com/assets/img/db-database.png" alt="CloudBackend" />
      <h1>CloudBackend</h1>
    </article>
  )

  // return (
  //   <article>
  //     <img src="https://user-images.githubusercontent.com/77246706/195115695-d4c6b5d3-0bd3-468a-9d62-e491cfa9fc1a.png" alt="Tekken Hub Homepage" />
  //     <h3>Project One</h3>
  //     <p>
  //       This is some text talking about my project.
  //       What if I were to make the text a bit longer.
  //     </p>
  //   </article>
  // )
}

export default Content;