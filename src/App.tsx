import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Header, Footer } from './components';
import { WelcomePage, StorePage, ContactUsPage, CartPage, ConstructorPage } from './pages';
import { useRequests } from './api';
import styles from './App.module.scss';

// Tracking window width:
function getWindowWidth() {
    return window.innerWidth;
}

export const App = () => {
    const dispatch = useDispatch();
    const { getDataThunk } = useRequests();
    const [ windowWidth, setWindowWidth ] = useState(getWindowWidth());

    useEffect(() => {
        dispatch(getDataThunk());
    }, []);

    // Tracking window width:
    useEffect(() => {
        function handleResize() {
            setWindowWidth(getWindowWidth());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={styles['application']}>
            <Header isMobile={windowWidth < 576}/>
            <main className={styles['application__main']}>
                <Routes>
                    <Route
                        path="/"
                        element={<WelcomePage/>}
                    />
                    <Route
                        path="/store"
                        element={<StorePage/>}
                    />
                    <Route
                        path="/contact-us"
                        element={<ContactUsPage/>}
                    />
                    <Route
                        path="/cart"
                        element={<CartPage/>}
                    />
                    <Route
                        path="/constructor"
                        element={<ConstructorPage/>}
                    />
                </Routes>
            </main>
            <Footer/>
        </div>
    );
}