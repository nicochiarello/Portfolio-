import "./App.css";
import React, { useState } from "react";
import profile from "./perfil.jpg";
import emoji from "./emoji.jpg";
import l5 from "./assets/l5.jpg";
import gd from "./assets/gd.jpg";
import cc from "./assets/cartcases.jpg";
import fh from "./assets/fh.png";
import translate from "./assets/translate.png";
import emailjs from "@emailjs/browser";

function App() {
  const [btnOpened, setBtnOpened] = useState(false);
  const [english, setEnglish] = useState(true);

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
        <span>Fullstack MERN Developer</span>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/104FPOT9AwgD2TSODTGM4uFPVhBDEbcnk/view?usp=sharing"
          className="btn1"
        >
          {english ? "Download CV" : "Descargar CV"}
        </a>
        <div className="btn2">
          <a href="#Contact">{english ? "Contact me" : "Contáctame"}</a>
        </div>
        <div className="img-container">
          <img src={profile} alt="" />
        </div>
      </div>

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
              <p>Freelancer</p>
              <span>
                {english ? "1+ Year experience" : "1+ años de experiencia"}
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
            <p>
              {english
                ? "I strongly believe programming is not just a job, I consider it to be an art, where I can build and represent all sorts of ideas. I really enjoy the challenges that it proposes to me since building an API to designing an entire front. Programming brought me great learnings and a whole new way of living which I love. On this page I will show you some of my profesional profile... hope you like it!"
                : "Para mi la programación no es solo un trabajo, lo considero un arte donde puedo crear y plasmar todo tipo de ideas. Disfruto mucho los desafíos que me propone, desde crear una api hasta diseñar todo un front, la programación me brindó grandes aprendizajes y una forma de vivir que verdaderamente me gusta. En esta página presento mi perfil y espero que te guste!"}
            </p>
          </div>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/104FPOT9AwgD2TSODTGM4uFPVhBDEbcnk/view?usp=sharing"
            className="btn3"
          >
            CV
          </a>
        </div>
      </div>
      <div id="Portfolio" className="portfolio">
        <h2>{english ? "My portfolio" : "Mis proyectos"}</h2>
        <span>{english ? "Recent Works" : "Trabajos recientes"}</span>
      </div>
      <div className="portfolio-grid">
        <a href="http://feriahermana.com/" className="portfolio-item">
          <div className="portfolio-item__img">
            <img src={fh} alt="" />
          </div>
          <div className="portfolio-item__info">
            <h3>Feria Hermana (Ecommerce)</h3>
            <h4>
              Demo <i class="bx bx-right-arrow-alt"></i>
            </h4>
            <h4>
              Code <i class="bx bxl-github"></i>
            </h4>
          </div>
        </a>
        <a href="https://www.lujanen5.com/" className="portfolio-item">
          <div className="portfolio-item__img">
            <img src={l5} alt="" />
          </div>
          <div className="portfolio-item__info">
            <h3>Lujan en 5' Newspaper</h3>
            <h4>
              Demo <i class="bx bx-right-arrow-alt"></i>
            </h4>
            <a href="https://github.com/nicochiarello/Lujan-en-5">
              Code <i class="bx bxl-github"></i>
            </a>
          </div>
        </a>
        <a href="https://guitardev.herokuapp.com/" className="portfolio-item">
          <div className="portfolio-item__img">
            <img src={gd} alt="" />
          </div>
          <div className="portfolio-item__info">
            <h3>GuitarDev (Ecommerce)</h3>
            <h4>
              Demo <i class="bx bx-right-arrow-alt"></i>
            </h4>
            <a href="https://github.com/nicochiarello/GuitarDev-Version-Final">
              Code <i class="bx bxl-github"></i>
            </a>
          </div>
        </a>
        <a href="https://cart-cases.netlify.app/" className="portfolio-item">
          <div className="portfolio-item__img">
            <img src={cc} alt="" />
          </div>
          <div className="portfolio-item__info">
            <h3>Cart Cases</h3>
            <h4>
              Demo <i class="bx bx-right-arrow-alt"></i>
            </h4>
            <a href="https://github.com/nicochiarello/CartCases-Final">
              Code <i class="bx bxl-github"></i>
            </a>
          </div>
        </a>
      </div>
      <div id="Knowledge" className="knowledge-title">
        <h2>{english ? "Knowledge" : "Conocimientos"}</h2>
      </div>
      <div className="knowledge-container">
        <div className="knowledgebox-1">
          <h4>Frontend</h4>
          <ul>
            <li>Html</li>
            <li>CSS/SASS</li>
            <li>Bootstrap</li>
            <li>Tailwind Css</li>
            <li>Javascript / Typescript</li>
            <li>React.js</li>
            <li>Context API</li>
            <li>Next js</li>
            <li>React native</li>
          </ul>
        </div>
        <div className="knowledgebox-2">
          <h4>Backend</h4>
          <ul>
            <li>NodeJS</li>
            <li>Express.js</li>
            <li>SQL/NoSQL</li>
            <li>MongoDB</li>
            <li>EJS</li>
            <li>JWT</li>
            <li>REST APIs</li>
            <li>Websockets</li>
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
              placeholder="Insert your name"
              className="form-name"
            ></input>

            <div className="name">{english ? "Name" : "Nombre"}</div>
          </div>
          <div className="name-form-container">
            <input
              placeholder="Insert your email"
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
