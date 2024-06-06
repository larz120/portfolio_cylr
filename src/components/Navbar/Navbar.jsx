import React, {useState} from "react";
import styles from "./Navbar.module.css";
import {getImageURL} from "../../utils";

 export default function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false)
    const [visible, setVisible] = useState(false)

    // Funcion para desaparecer boton de scroll up
    const toggleVisible = () =>{
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 200){ 
            setVisible(true) 
          }  
          else if (scrolled <= 20){ 
            setVisible(false) 
          } 
    }
      
    window.addEventListener('scroll', toggleVisible); 

    return(
        <nav className={styles.navbar}>

            <a href="/" className={styles.title}>Yahir Lara</a>
            <div className={styles.menu}>
                <img 
                    className={styles.menuBtn} 
                    src={menuOpen ? getImageURL("nav/menuClose.png") 
                        :
                        getImageURL("nav/menuIcon.png")
                    } 
                    alt="menu-button"
                    // useState para cambiar icono 
                    onClick={() => setMenuOpen(! menuOpen)}
                    
                />
                 
                <ul className= {`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={() => setMenuOpen(false)} >
                    <li><a href="#About">About</a></li>
                    <li><a href="#Experience">Experecience</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </div>
            <a className={styles.goUpBtn} style={{display: visible ? 'flex' : 'none'}} href="#"><img src={getImageURL("nav/goUp.svg")} alt="Go Up" /></a>
            
        </nav>
    )
 }

 