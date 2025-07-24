import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer(){

    return (
        <section className="flex flex-row gap-3 mt-4 text-center align-middle">
            <p>
                Find me here:
            </p>
            <a href="https://github.com/Silasueber" target="_blank"><FaGithub className="text-2xl"/></a>
            <a href="https://www.linkedin.com/in/silas-ueberschaer-612b13115/" target="_blank"><FaLinkedin className="text-2xl"/></a>
        </section>
        )
}