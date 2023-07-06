import Header from "./../components/header/header";

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