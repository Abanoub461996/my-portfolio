// ICONS
import { MdPhone } from "react-icons/md";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import {} from "react-icons/md";

// CSS
import "./ContactComponent.css";

const Contact = () => {
  return (
    <>
      <footer>
        <div className="contacts-details">
          <p className="contact-item">
            <MdPhone /> <span>: (+20) 155 2632 614</span>{" "}
          </p>
          <p className="contact-item">
            <MdMarkEmailUnread /> <span>: abanoubrwassad@gmail.com</span>
          </p>
        </div>
        <div className="contacts-links">
          <p className="contact-link">
            <a
              href="https://github.com/Abanoub461996"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </p>
          <p className="contact-link">
            <a
              href="https://www.hackerrank.com/abanoubrwassad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiHackerrank />
            </a>
          </p>
          <p className="contact-link">
            <a
              href="https://www.linkedin.com/abanoub-assad-791b721ab/?_l=en_US"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </p>
          {/* <p className="contact-link"><MdPhone/></p> */}
        </div>
        <div className="copy-rights">
          <p>Made By Abanoub in 2022</p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
