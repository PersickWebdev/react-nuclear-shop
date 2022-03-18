import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { Store, ContactUs } from './pages';
import styles from './App.module.scss';

// Tracking window width:
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
                <Routes>
                    <Route>
                        <Route
                            path="/"
                            element={<Store/>}
                        />
                        <Route
                            path="/store"
                            element={<Store/>}
                        />
                        <Route
                            path="/contact-us"
                            element={<ContactUs/>}
                        />
                    </Route>
                </Routes>
            </main>
            <Footer/>
        </div>
    );
}