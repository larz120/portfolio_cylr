import React from "react";
import { getImageURL } from "../../utils";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({project: { title, imageSrc, description, skills, demo, source}}){

    return <div className={styles.container}>
    <img className={styles.img} src={getImageURL(imageSrc)} alt={`Image of ${title}`} />
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}>{description}</p>
    <ul className={styles.skills}>{skills.map((skills, id)=>
        <li className={styles.skill} key={id}>{skills}</li>)}</ul>
    <div className={styles.links}>
        <a className={styles.link} href={demo} target="blank">DEMO</a>
        <a className={styles.link} href={source} target="blank">SOURCE</a>
    </div>
</div>
}