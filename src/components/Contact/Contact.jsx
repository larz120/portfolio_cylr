import React from "react";
import styles from "./Contact.module.css"
import { getImageURL } from "../../utils";

export default function Contact(){

    return (
        <footer className={styles.container} id="Contact">
            <div className={styles.text}>
                <h2 className={styles.title}>CONTACT</h2>
                <p>Get in touch with me</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}><img src={getImageURL("main/EmailIcon.svg")} alt="Email Icon" />
                <a href="mailto:carlosyahirlr@gmail.com" >carlosyahirlr@gmail.com</a>
                </li>
                <li className={styles.link}><img src={getImageURL("main/WhatsappIcon.svg")} alt="WhatsApp Icon" />
                <a target="blank" href="https://wa.me/523320093479">+52 33 2009 3479</a>
                </li>
                <li className={styles.link}><img src={getImageURL("main/GithubIcon.svg")} alt="GitHub Icon" />
                <a target="blank" href="https://github.com/larz120">github.com/larz120</a>
                </li>
                <li className={styles.link}><img src={getImageURL("main/LinkedinIcon.svg")} alt="LinkedIn Icon" />
                <a target="blank" href="https://www.linkedin.com/in/carlos-yahir-lara-ruiz-b7b34a266/">linkedin.com/in/carlos-yahir-lara-ruiz-b7b34a266</a>
                </li>
            </ul>
        </footer>
    )
}