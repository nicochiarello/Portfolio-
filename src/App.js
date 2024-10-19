import "./App.css";
import React, { useState } from "react";
import profile from "./perfil.jpg";
import emoji from "./emoji.jpg";
import translate from "./assets/translate.png";
import emailjs from "@emailjs/browser";
import ProjectsList from "./components/projects/ProjectsList";

function App() {
  const [btnOpened, setBtnOpened] = useState(false);
  const [english, setEnglish] = useState(true);

  const locations = {
    about_description: {
      en: "I firmly believe that programming is not just a job, but an art—a way to bring ideas to life and build solutions. I enjoy the challenges it presents, from designing a full front-end experience to building APIs. Programming has given me valuable lessons and shaped a way of life that I am passionate about. On this page, you'll find a glimpse of my professional profile. I hope you enjoy it!",
      es: "Para mí, la programación no es solo un trabajo, sino un arte: una forma de dar vida a ideas y construir soluciones. Disfruto de los desafíos que presenta, desde diseñar una experiencia completa de front-end hasta construir APIs. La programación me ha brindado valiosas lecciones y ha dado forma a una forma de vida que me apasiona. En esta página, encontrarás un vistazo a mi perfil profesional. ¡Espero que lo disfrutes!",
    },
  };

  let cv = english
    ? "https://drive.google.com/file/d/15xIKMdOdfcmiyGtbBAAoASXLOFRB3oxb/view?usp=sharing"
    : "https://drive.google.com/file/d/1ca1KjhpOV-gVkH1HvWmyl92I3bpg9gSe/view?usp=sharing";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rkyii5i",
        "template_v7ytzp5",
        e.target,
        "pX2NA1fgSXR77xWDZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
      <div className="nav">
        <div className="nav-items">
          <div onClick={() => setEnglish(!english)} className="translate">
            <img className="translate-icon" src={translate} alt="" />
            <p className="language">{english ? "English" : "Español"}</p>
            <i class="bx bx-transfer"></i>
          </div>
          <a href="#About">
            <i class="bx bx-user"></i>
          </a>
          <a href="#Portfolio">
            <i class="bx bx-briefcase-alt"></i>
          </a>
          <a href="#Knowledge">
            <i class="bx bxs-graduation"></i>
          </a>
          <a href="#Contact">
            <i class="bx bxs-contact"></i>
          </a>
        </div>
      </div>
      <div className="navbar">
        <div className="name-navbar">
          <h3>Nicolas</h3>
        </div>
        <ul className="navbar-items">
          <li>
            <a href="#About">{english ? "About" : "Sobre mí"}</a>
          </li>
          <li>
            <a href="#Portfolio">{english ? "Work" : "Trabajo"}</a>
          </li>
          <li>
            <a href="#Knowledge">{english ? "Knowledge" : "Conocimiento"}</a>
          </li>
          <li>
            <a href="#Contact">{english ? "Contact" : "Contacto"}</a>
          </li>
        </ul>
        <ul className="navbar-menu">
          <li>
            {btnOpened ? (
              <i onClick={() => setBtnOpened(false)} class="bx bx-x"></i>
            ) : (
              <i onClick={() => setBtnOpened(true)} class="bx bx-menu"></i>
            )}
          </li>
        </ul>
      </div>

      {btnOpened ? (
        <div className="navbar-mobile">
          <ul
            onClick={() => setBtnOpened(false)}
            className="navbar-mobile-items"
          >
            <li>
              <a href="#About">{english ? "About" : "Sobre mí"}</a>
            </li>
            <li>
              <a href="#Portfolio">{english ? "Work" : "Trabajo"}</a>
            </li>
            <li>
              <a href="#Knowledge">{english ? "Knowledge" : "Conocimiento"}</a>
            </li>
            <li>
              <a href="#Contact">{english ? "Contact" : "Contacto"}</a>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}

      <div className="intro">
        <p>{english ? "Hello I´m" : "Hola Soy"}</p>
        <h1>Nicolas Chiarello</h1>
        <span>Fullstack Developer</span>
        <a target="_blank" href={cv} className="btn1">
          {english ? "Download CV" : "Descargar CV"}
        </a>
        <div className="btn2">
          <a href="#Contact">{english ? "Contact me" : "Contáctame"}</a>
        </div>
        <div className="img-container">
          <img src={profile} alt="" />
        </div>
      </div>

      {/* About section */}

      <div id="About" className="about-title">
        <h2>{english ? "About" : "Sobre mí"}</h2>
      </div>
      <div className="about-container">
        <div className="about-img">
          <img src={emoji} alt="" />
        </div>
        <div className="about-items">
          <div className="about-items-boxes">
            <div className="about-boxes">
              <i class="bx bxs-brain"></i>
              <p>Experience</p>
              <span>
                {english ? "+3 Years experience" : "+3 años de experiencia"}
              </span>
            </div>
            <div className="about-boxes">
              <i class="bx bxs-briefcase-alt"></i>
              <p>{english ? "Completed" : "Proyectos"}</p>
              <span>{english ? "Many projects" : "Ecommerces, etc."}</span>
            </div>
            <div className="about-boxes">
              <i class="bx bx-book-bookmark"></i>
              <p>{english ? "C1 English" : "Inglés"}</p>
              <span>{english ? "Level" : "Nivel C1"}</span>
            </div>
          </div>
          <div className="about-text">
            <p>{locations.about_description[english ? "en" : "es"]}</p>
          </div>
          <a target="_blank" href={cv} className="btn3">
            CV
          </a>
        </div>
      </div>
      <div id="Portfolio" className="portfolio">
        <h2>{english ? "My portfolio" : "Mis proyectos"}</h2>
        <span>{english ? "Recent Projects" : "Trabajos recientes"}</span>
      </div>

      <ProjectsList />

      <div id="Portfolio" className="portfolio">
        <h2>Work Experience</h2>
      </div>

      <section id="experience">
        <div class="job">
          <h3>🚀 Dillostores USA - Frontend Developer</h3>
          <p>
            <strong>Duration:</strong> 2022 - Present
          </p>
          <p>
            Currently working as a frontend developer, contributing to the
            development of web and mobile applications. I specialize in creating
            responsive UIs and enhancing user experiences.
          </p>
        </div>
        <div class="job">
          <h3>🌐 Freelancer</h3>
          <p>
            <strong>Duration:</strong> 2021 - 2022
          </p>
          <p>
            I worked on various projects as a freelancer, handling both frontend
            and backend development, collaborating with clients to deliver
            customized solutions.
          </p>
        </div>
      </section>

      <div id="Knowledge" className="knowledge-title">
        <h2>{english ? "Knowledge" : "Conocimientos"}</h2>
      </div>
      <div className="knowledge-container">
        <div className="knowledgebox-1">
          <h4>Frontend</h4>
          <ul>
            <li>Javascript / Typescript</li>
            <li>Next js</li>
            <li>React.js</li>
            <li>Angular</li>
            <li>Flutter</li>
            <li>React native</li>
            <li>Html/CSS/SAAS</li>
            <li>Bootstrap</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        <div className="knowledgebox-2">
          <h4>Backend</h4>
          <ul>
            <li>NestJS</li>
            <li>Microservices</li>
            <li>NodeJS</li>
            <li>Express.js</li>
            <li>SQL/NoSQL</li>
            <li>Docker</li>
            <li>Linux</li>
            <li>REST APIs</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
      <div className="knowledge-title">
        <h2>{english ? "Contact Me" : "Contáctame"}</h2>
      </div>

      <div id="Contact" className="contact-container">
        <div className="contact-boxes">
          <h4>{english ? "Talk to me" : "Datos de contacto"}</h4>
          <div className="contact-box">
            <i class="bx bx-mail-send"></i>
            <h3>Email</h3>
            <p>nicolasch.fcm@gmail.com</p>
            <a href="mailto: nicolasch.fcm@gmail.com">
              {english ? "Write me" : "Escríbeme"}
            </a>
          </div>
          <div className="contact-box">
            <i class="bx bxl-whatsapp"></i>
            <h3>WhatsApp</h3>
            <p>+5492616930795</p>
            <a href="https://wa.me/5492616930795?text=Hi!">
              {english ? "Write me" : "Escríbeme"}
            </a>
          </div>
          <div className="contact-box">
            <i class="bx bxl-linkedin-square"></i>
            <h3>LinkedIn</h3>
            <p>nicolas-chiarello</p>
            <a href="https://www.linkedin.com/in/nicolas-chiarello-ba5509208/">
              {english ? "Go to my profile" : "Ir a mi perfil"}
            </a>
          </div>
        </div>
        <form onSubmit={sendEmail} className="form-container">
          <h3>{english ? "Write me your project" : "Hazme tu consulta"}</h3>

          <div className="name-form-container">
            <input
              type="text"
              name="name"
              placeholder={english ? "Insert your name" : "Ingrese su nombre"}
              className="form-name"
            ></input>

            <div className="name">{english ? "Name" : "Nombre"}</div>
          </div>
          <div className="name-form-container">
            <input
              placeholder={english ? "Insert your email" : "Ingrese su email"}
              className="form-name"
              type="text"
              name="email"
            ></input>

            <div className="email">Mail</div>
          </div>
          <div className="name-form-container">
            <textarea
              name="message"
              placeholder={
                english ? "Write your project" : "Escriba su proyecto"
              }
              className="form-text"
            ></textarea>

            <div className="project">{english ? "Project" : "Proyecto"}</div>
          </div>
          <div className="btn-form-container">
            <button type="submit" className="btn-form">
              <p>{english ? "SEND" : "Enviar"}</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
