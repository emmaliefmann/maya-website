import React from 'react';
import styles from '../styles/Contact.module.scss'
import Image from 'next/image'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"


const contactPage = () => {
    return (
        <>
            <section className={styles.mediaCard}>
                <img src="/img/cafe.jpg" alt="" />
                <div className={styles.rightContainer}>
                    <h1>Work with me</h1>
                    <div className={styles.textCtn}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <div className={styles.socials}>
                            <FontAwesomeIcon icon={faEnvelope} size="2x"/> 
                            <FontAwesomeIcon icon={faLinkedin} size="4x" />
                            <FontAwesomeIcon icon={faInstagram} size="4x" /> 
                        </div>
                    </div>
                    
                </div>
            </section>
            <span className={styles.divider}></span>
            <section className={styles.recommendations}>
                <h2>What my clients say</h2>
                <div className={styles.tile}>
                    <img src="https://picsum.photos/150/150" alt="" />
                    <div>
                        <p>Maya is really great she can also 
                            bake bread and has a sweet sense of style. I would recommend her to anyone.</p><br/>
                        <p><em>- A Media Company</em></p>
                    </div>
                </div>
                <div className={styles.tile}>
                    <img src="https://picsum.photos/150/150" alt="" />
                    <div>
                        <p>Maya is really great she can also 
                            bake bread and has a sweet sense of style. I would recommend her to anyone.</p><br/>
                        <p><em>- A Media Company</em></p>
                    </div>
                </div>
                <div className={styles.tile}>
                    <img src="https://picsum.photos/150/150" alt="" />
                    <div>
                        <p>Maya is really great she can also 
                            bake bread and has a sweet sense of style. I would recommend her to anyone.</p><br/>
                        <p><em>- A Media Company</em></p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default contactPage;