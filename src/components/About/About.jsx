import React from "react";
import styles from "./About.module.css"
import { getImageURL } from "../../utils";

export default function About(){

    return(
        <section className={styles.container} id="About">
            <h1 className={styles.title}>ABOUT ME</h1>
            <div className={styles.content}>

                <img  className={styles.imgAbout} src={getImageURL("about/programmer.png")} alt="img-about" />
                
                <ul className={styles.cardContainer}>
                    <li className={styles.card}>
                    <img className={styles.cardImg} src={getImageURL("about/graduate.svg")} alt="a" />
                        <div className={styles.cardText}>
                            <h2 >Soon to graduate </h2>
                            <p>
                            Bachelor of Engineering in Computer Science at 'CUCEI - Universidad de Guadalajara'
                            </p>
                        </div>
                        
                    </li>

                    <li className={styles.card}>
                        <img className={styles.cardImg} src={getImageURL("about/web.svg")} alt="a" />
                        <div className={styles.cardText}>
                            <h2>My interests</h2>
                            <p>
                            Interested on developing myself in the QA area, the development and maintence of tools a scripts for automation, networks and IT.  
                            </p>
                        </div>
                    </li>

                    <li className={styles.card}>
                        <img className={styles.cardImg} src={getImageURL("about/happy.svg")} alt="a" />
                        <div className={styles.cardText}>
                        <h2>How I am? </h2>
                            <p>
                            Highly organized, creative, confident in my abilities, committed and motivated to self-study and work
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}