export default function Skills() {
  return (
    <section className="skills-section main-section">
      <h1 className="section-header">Skills</h1>
      <section className="skill-cards-section">

        <section className="skill-card">
          <SkillCardHeader header="Visuals" />
          <section>
            <Skill name="CSS" img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fclipartcraft.com%2Fimages%2Fhtml5-logo-transparent-background-4.png&f=1&nofb=1&ipt=a6475c337c487999d5a1dcc7cfba8b3e913b0d11526e98a144904a87ca3092aa&ipo=images"/>
            <Skill name="HTML" img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2017%2F07%2FHTML5_badge.png&f=1&nofb=1&ipt=184e801e887882e207244b8924e47affef0cc92ff424342068838e44387f09b6&ipo=images"/>
            <Skill name="React" img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Flogos-3%2F600%2FReact.js_logo-512.png&f=1&nofb=1&ipt=6bf58581922819737b618f3cb12c2c2b671a8af66d9e519a609cb86192997e59&ipo=images" />
          </section>
        </section>

        <section className="skill-card">
          <SkillCardHeader header="Functionality"/>
          <section>
            <Skill name="Javascript" img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Falgorizen.gallerycdn.vsassets.io%2Fextensions%2Falgorizen%2Fjavascript-snippets%2F0.1.4%2F1599411161392%2FMicrosoft.VisualStudio.Services.Icons.Default&f=1&nofb=1&ipt=92cec8b0b01c762a11996e8518b8927c81b66b30f046b34122d05700f817bc2f&ipo=images" />
            <Skill name="jQuery" img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpluspng.com%2Fimg-png%2Fjquery-logo-png--512.png&f=1&nofb=1&ipt=f81d5cfeaed7fc68db547df8ebb2e30e5e33f72c539808eb6c5628ef2d59f0ba&ipo=images" />
          </section>
        </section>

        <section className="skill-card">
          <SkillCardHeader header="Tools"/>
          <section>
            <Skill name="Git" img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fgit-icon-logo-png-transparent.png&f=1&nofb=1&ipt=47564e14097bd99bfb5f6c90766733f168fc1d4d4e3b33912f662fe7aa40cf77&ipo=images" />
            <Skill name="GitHub" img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-download.com%2Fwp-content%2Fuploads%2F2016%2F09%2FGitHub_logo.png&f=1&nofb=1&ipt=a22d8f70bd14932e86b2df28623745a452d9fb0aeff9a995e1732db698a5de63&ipo=images" />
            <Skill name="NPM" img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fnpm-logo-png-transparent.png&f=1&nofb=1&ipt=219670aeba51815b7f5f4e3341b9c2becac7d8cefae50f8b19e27a6cfb893599&ipo=images" />
            <Skill name="SASS" img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Fthumbs%2F2x%2Fsass-1-logo.png&f=1&nofb=1&ipt=c0ccef3f19049cc52b4487e2e71b95a4ee69a72aec3ac3e98920de5cff48ed73&ipo=images" />
          </section>
        </section>

      </section>
    </section>
  )
}

// Very simple component to save 2 lines of code
function SkillCardHeader(props) {
  return (
    <div>
      <h2>{props.header}</h2>
    </div>
  )
}

// Uses props.name and props.img to create a skill in the skill cards
function Skill(props) {
  return (
    <article>
      <img src={props.img} alt={props.name}/>
      <h3>{props.name}</h3>
    </article>
  )
}