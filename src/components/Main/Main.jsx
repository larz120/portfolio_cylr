import React from "react";
import styles from "./Main.module.css"
import { getImageURL } from "../../utils";

export default function Main() {

    return (
        <section className={styles.container}>
            <img src={getImageURL("main/Avatar.png")} alt="picture-of-me" className={styles.avatar} />
            <div className={styles.content}>

                <h1 className={styles.title}>Carlos Yahir Lara Ruiz</h1>
                <h2>Computer Science & Engineering Student </h2>
                <p>
                    My professional goal is to become a great element in a team dedicated to QA, development of tools for automation and IT.  
                </p>
                <a className={styles.cvBtn} href={getImageURL("main/cv/CYLR_Resume.pdf")} download>
                    <img className={styles.downloadIcon} src={getImageURL("main/downloadIcon.svg")}alt="download-icon" />
                    Download CV
                </a>
                <div className={styles.containerButtons}>
                    <a className={styles.btnIcon} href="https://github.com/larz120" target="blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" /></svg>
                    </a>

                    <a className={styles.btnIcon} href="https://www.linkedin.com/in/carlos-yahir-lara-ruiz-b7b34a266/" target="blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" /></svg>
                    </a>
                </div>

            </div>

            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}