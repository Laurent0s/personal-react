import "./styles/main.css";

import linkedin from "./img/icons/linkedIn.svg";
import instagram from "./img/icons/instagram.svg";
import github from "./img/icons/gitHub.svg";
import twitter from "./img/icons/twitter.svg";

import primg1 from "./img/projects/01.jpg";
import primg2 from "./img/projects/02.jpg";
import primg3 from "./img/projects/03.jpg";
import primg4 from "./img/projects/04.jpg";
import primg5 from "./img/projects/05.jpg";
import primg6 from "./img/projects/06.jpg";

import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">

      <Navbar/>

	  <Header/>

	
	<main className="section">
		<div className="container">
			<h2 className="title-1">Projects</h2>
			<ul className="projects">
				<li className="project">
					<a href="./project-page.html">
						<img src={primg1} alt="Project Img" className="project__img" />
						<h3 className="project__title">Gaming Streaming Website</h3>
					</a>
				</li>
				<li className="project">
					<a href="./project-page.html">
						<img src={primg2} alt="Project Img" className="project__img" />
						<h3 className="project__title">Video Service</h3>
					</a>
				</li>
				<li className="project">
					<a href="./project-page.html">
						<img src={primg3} alt="Project Img" className="project__img" />
						<h3 className="project__title">Video Portal</h3>
					</a>
				</li>
				<li className="project">
					<a href="./project-page.html">
						<img src={primg4} alt="Project Img" className="project__img" />
						<h3 className="project__title">Dating App</h3>
					</a>
				</li>
				<li className="project">
					<a href="./project-page.html">
						<img src={primg5} alt="Project Img" className="project__img" />
						<h3 className="project__title">Landing</h3>
					</a>
				</li>
				<li className="project">
					<a href="./project-page.html">
						<img src={primg6} alt="Project Img" className="project__img" />
						<h3 className="project__title">Gamimg Community</h3>
					</a>
				</li>
			</ul>
		</div>
	</main>

	<footer className="footer">
		<div className="container">
			<div className="footer__wrapper">
				<ul className="social">
					<li className="social__item"><a href="#!"><img src={instagram} alt="Link" /></a></li>
					<li className="social__item"><a href="#!"><img src={twitter} alt="Link" /></a></li>
					<li className="social__item"><a href="#!"><img src={github} alt="Link" /></a></li>
					<li className="social__item"><a href="#!"><img src={linkedin} alt="Link" /></a></li>
				</ul>
				<div className="copyright">
					<p>© 2022 frontend-dev.com</p>
				</div>
			</div>
		</div>

	</footer>
    </div>
  );
}

export default App;
