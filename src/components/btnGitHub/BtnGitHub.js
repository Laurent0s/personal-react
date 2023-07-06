import githubIcon from "./gitHub-black.svg";
import "./style.css";

const BtnGitHub = ( {link} ) => {
    return ( 
        <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
            <img src={githubIcon} alt="" />
            Github repo
        </a>
     );
}
 
export default BtnGitHub;