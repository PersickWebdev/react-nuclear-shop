import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
import { Header, Footer } from './components';

function getWindowWidth() {
    return window.innerWidth;
}

export const App = () => {
    const [ windowWidth, setWindowWidth ] = useState(getWindowWidth());
    const [ isMobile, setIsMobile ] = useState<boolean>(false);

    // Tracking window width:
    useEffect(() => {
        function handleResize() {
            setWindowWidth(getWindowWidth());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });

    console.log('App - windowWidth: ', windowWidth);

    return (
        <div className={styles['application']}>
            <Header isMobile={windowWidth < 576}/>
            <main className={styles['application__main']}>
                Main
            </main>
            <Footer/>
        </div>
    );
}