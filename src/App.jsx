
import './App.css';

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <h2 className="logo">Aneef<span>.</span></h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="welcome" id="home">
        <h1>Hi, I'm Aneef 👋</h1>
        <h2>Software Engineering Student</h2>
        <p>
          I am learning to build modern websites and applications
          using React, JavaScript, and other technologies.
        </p>
        <button>View My Projects</button>
      </section>

      <section className="about" id="about">
        <h2>About Me</h2>
        <p>
          I am a Software Engineering student passionate about
          web development and technology. I am developing my skills
          in JavaScript, React, and building useful applications.
          My goal is to become a professional software engineer
          and create solutions that help people.
        </p>
      </section>
      <section className="projects" id="projects">
        <h2>My Projects</h2>
        <p>Here are some projects I am working on as I learn software development.</p>

        <div className="project-container">
          <div className="project-card">
            <h3>Personal Portfolio</h3>
            <p>A personal website built with React and CSS to showcase my skills and projects.</p>
          </div>

          <div className="project-card">
            <h3>Student Management System</h3>
            <p>A planned application to manage student details and academic records.</p>
          </div>

          <div className="project-card">
            <h3>Task Manager</h3>
            <p>A planned application to organise daily tasks and track progress.</p>
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
        <h2>Contact Me</h2>
        <p>
          I am open to internship opportunities, junior developer roles,
          and exciting software development projects.
        </p>

        <a
          className="contact-button"
          href="mailto:mohamedaneef31@gmail.com"
        >
          Email Me
        </a>
      </section>
     </div>
  );
}

export default App;