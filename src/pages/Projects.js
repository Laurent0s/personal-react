import img from "./../img/projects/02-big.jpg";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import {projects} from "./../helpers/projectsList";
import { useParams } from "react-router-dom";

const Project = () => {
    const {id} = useParams();
    const project = projects[id];

    console.log(project);

    return ( 
    <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">Video Service</h1>
                
                
                <img src={img} alt="" className="project-details__cover" />

                <div className="project-details__desc">
                    <p>Skills: React, Node.js, MondoDB</p>
                </div>

                <BtnGitHub link="http://github.com"/>

            </div>
        </div>
    </main> 
);
}
 
export default Project;