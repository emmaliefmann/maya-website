import React from 'react';
import styles from '../styles/Contact.module.scss'
import Image from 'next/image'

const contactPage = () => {
    return (
        <>
            
            <section className={styles.mediaCard}>
            
                <Image 
                height={500}
                width={500}
                layout='responsive'
                src='/img/headshot-square.jpg'
                />
                <div>
                <h1>Work with me</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </section>
        </>
    )
}

export default contactPage;