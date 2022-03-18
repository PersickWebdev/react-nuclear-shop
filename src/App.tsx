import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { StorePage, ContactUsPage } from './pages';
import styles from './App.module.scss';

// Tracking window width:
function getWindowWidth() {
    return window.innerWidth;
}

export const App = () => {
    const [ windowWidth, setWindowWidth ] = useState(getWindowWidth());

    // Tracking window width:
    useEffect(() => {
        function handleResize() {
            setWindowWidth(getWindowWidth());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    console.log('App - windowWidth: ', windowWidth);

    return (
        <div className={styles['application']}>
            <Header isMobile={windowWidth < 576}/>
            <main className={styles['application__main']}>
                <Routes>
                    <Route
                        path="/"
                        element={<StorePage/>}
                    />
                    <Route
                        path="/store"
                        element={<StorePage/>}
                    />
                    <Route
                        path="/contact-us"
                        element={<ContactUsPage/>}
                    />
                </Routes>
            </main>
            <Footer/>
        </div>
    );
}