import { NavLink } from "react-router-dom";
import "./style.css";

const Projects = ({title,img, index}) => {
    return ( 
    <NavLink to={'/project/${index}'}>
        <li className="project">
                <img 
                src={img} 
                alt={title} 
                className="project__img" 
                />
                {index}
                <h3 className="project__title">{title}</h3>
        </li> 
    </NavLink>
);
}
 
export default Projects;