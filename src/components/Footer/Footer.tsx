import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles['footer']}>
            <div className={styles['container']}>
                <p className={styles['footer__copyrights']}>
                    ALL RIGHTS RESERVED
                </p>
            </div>
        </footer>
    );
};

export default Footer;