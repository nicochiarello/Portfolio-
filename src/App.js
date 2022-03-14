import "./App.css";
import React, { useState } from "react";
import profile from "./perfil.jpg";
import emoji from "./emoji.jpg";
import l5 from "./assets/l5.jpg"
import gd from "./assets/gd.jpg"
import cc from "./assets/cartcases.jpg"
import gy from "./assets/gayatry.jpg"
import translate from "./assets/translate.png"

function App() {
  const [btnOpened, setBtnOpened] = useState(false);
  const [english, setEnglish] = useState(true);
  return (
    <div>
      <div className="nav">
        <div className="nav-items">
          <div onClick={() => setEnglish(!english)} className="translate">
            <img className="translate-icon" src={translate} alt="" />
            <p>{english ? "English" : "Español"}</p>
            <i class="bx bx-chevron-down"></i>
          </div>
          <i class="bx bx-briefcase-alt"></i>
          <i class="bx bxs-graduation"></i>
          <i class="bx bxs-contact"></i>
         
        </div>
      </div>
      <div className="navbar">
        <div className="name-navbar">
          <h3>Nicolas</h3>
        </div>
        <ul className="navbar-items">
          <li>{english ? "About" : "Sobre mí"}</li>
          <li>{english ? "Work" : "Trabajo"}</li>
          <li>{english ? "Knowledge" : "Conocimiento"}</li>
          <li>{english ? "Contact" : "Contacto"}</li>
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
          <ul className="navbar-mobile-items">
            <li>{english ? "About" : "Sobre mí"}</li>
            <li>{english ? "Work" : "Trabajo"}</li>
            <li>{english ? "Knowledge" : "Conocimiento"}</li>
            <li>{english ? "Contact" : "Contacto"}</li>
          </ul>
        </div>
      ) : (
        ""
      )}

      <div className="intro">
        <p>{english ? "Hello I´m" : "Hola Soy"}</p>
        <h1>Nicolas Chiarello</h1>
        <span>Fullstack MERN Developer</span>
        <div className="btn1">{english ? "Download CV" : "Descargar CV"}</div>
        <div className="btn2">{english ? "Contact me" : "Contáctame"}</div>
        <div className="img-container">
          <img src={profile} alt="" />
        </div>
      </div>

      <div className="about-title">
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
              <span>
                {english
                  ? "Many projects"
                  : "Ecommerces, Diarios digitales etc."}
              </span>
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
          <div className="btn3">CV</div>
        </div>
      </div>
      <div className="portfolio">
        <h2>{english ? "My portfolio" : "Mis proyectos"}</h2>
        <span>{english ? "Recent Works" : "Trabajos recientes"}</span>
      </div>
      <div className="portfolio-grid">
        <div className="portfolio-item">
          <div className="portfolio-item__img">
            <img src={l5} alt="" />
          </div>
          <div className="portfolio-item__info">
            <h3>Lujan en 5' Newspaper</h3>
            <span>
              Demo <i class="bx bx-right-arrow-alt"></i>
            </span>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="portfolio-item__img">
            <img src={gd} alt="" />
          </div>
          <div className="portfolio-item__info">
            <h3>Lujan en 5' Newspaper</h3>
            <span>
              Demo <i class="bx bx-right-arrow-alt"></i>
            </span>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="portfolio-item__img">
            <img src={cc} alt="" />
          </div>
          <div className="portfolio-item__info">
            <h3>Lujan en 5' Newspaper</h3>
            <span>
              Demo <i class="bx bx-right-arrow-alt"></i>
            </span>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="portfolio-item__img">
            <img src={gy} alt="" />
          </div>
          <div className="portfolio-item__info">
            <h3>Lujan en 5' Newspaper</h3>
            <span>
              Demo <i class="bx bx-right-arrow-alt"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="knowledge-title">
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
            <li>Javascript</li>
            <li>React.js</li>
            <li>Redux</li>
            <li>Context API</li>
            <li>Next js</li>
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

      <div className="contact-container">
        <div className="contact-boxes">
          <h4>{english ? "Talk to me" : "Datos de contacto"}</h4>
          <div className="contact-box">
            <i class="bx bx-mail-send"></i>
            <h3>Email</h3>
            <p>nicolasch.fcm@gmail.com</p>
            <span>{english ? "Write me" : "Escríbeme"}</span>
          </div>
          <div className="contact-box">
            <i class="bx bxl-whatsapp"></i>
            <h3>WhatsApp</h3>
            <p>+5492616930795</p>
            <span>{english ? "Write me" : "Escríbeme"}</span>
          </div>
          <div className="contact-box">
            <i class="bx bxl-linkedin-square"></i>
            <h3>LinkedIn</h3>
            <p>nicolas-chiarello</p>
            <span>Go to my profile</span>
          </div>
        </div>
        <div className="form-container">
          <h3>{english ? "Write me your project" : "Hazme tu consulta"}</h3>

          <div className="name-form-container">
            <input placeholder="Insert your name" className="form-name"></input>

            <div className="name">{english ? "Name" : "Nombre"}</div>
          </div>
          <div className="name-form-container">
            <input
              placeholder="Insert your email"
              className="form-name"
            ></input>

            <div className="email">Mail</div>
          </div>
          <div className="name-form-container">
            <input
              placeholder={
                english ? "Write your project" : "Escriba su proyecto"
              }
              className="form-text"
            ></input>

            <div className="project">{english ? "Project" : "Proyecto"}</div>
          </div>
          <div className="btn-form-container">
            <div className="btn-form">
              <p>{english ? "SEND" : "Enviar"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
