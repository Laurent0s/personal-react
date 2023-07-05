import Header from "./../components/header/header";

import primg1 from "./../img/projects/01.jpg";
import primg2 from "./../img/projects/02.jpg";
import primg3 from "./../img/projects/03.jpg";
import primg4 from "./../img/projects/04.jpg";
import primg5 from "./../img/projects/05.jpg";
import primg6 from "./../img/projects/06.jpg";

const Skills = () => {
    return ( 
    <>
    <Header/>	
    <main className="section">
        <div className="container">
                <h1 className="title-1">Skills</h1>
                

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Frontend</h2>
                            <ul className="frontend__skills">
                                <li className="frontend__skill">- JavaScript</li>
                                <li className="frontend__skill">- TypeScript</li>
                                <li className="frontend__skill">- ReactJS</li>
                                <li className="frontend__skill">- Angular</li>
                                <li className="frontend__skill">- Redux</li>
                            </ul>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Backend</h2>
                            <ul className="backend__skills">
                                <li className="backend__skill">- NodeJS</li>
                                <li className="backend__skill">- MySQL</li>
                                <li className="backend__skill">- MongoDB</li>
                                <li className="backend__skill">- PHP</li>
                                <li className="backend__skill">- Laravel</li>
                            </ul>
                    </li>
                </ul>
        </div>
    </main>
</>
);
}
 
export default Skills;