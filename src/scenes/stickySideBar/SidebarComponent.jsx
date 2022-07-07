import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";

import "./SidebarComponent.css"

const Sidebar =()=>{
    
    return(<>
     <div className="sidebar-container">
     <p className="sidebar-icon">
            <a
              href="#contacts"
              rel="noopener noreferrer"
            >
              <RiContactsFill />
            </a>
          </p>
          <p className="sidebar-icon">
            <a
              href="https://github.com/Abanoub461996"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </p>
          <p className="sidebar-icon">
            <a
              href="https://www.linkedin.com/abanoub-assad-791b721ab/?_l=en_US"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </p>
         
        </div>
    
    </>)
}

export default Sidebar;