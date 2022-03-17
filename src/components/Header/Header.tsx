import React from 'react';
import styles from './Header.module.scss';
import { Navigation } from '../../components';

const Header = () => {
    return (
        <header className={styles['header']}>
            <div className={styles['container']}>
                <div className={styles['header__section']}>
                    <div className={styles['header__logo-box']}>
                        <a
                            className={styles['header__logo-link']}
                            href="/"
                        >
                            <img
                                className={styles['header__logo']}
                                src="/images/general/logo.png"
                                alt="nuclear-shop"
                            />
                        </a>
                    </div>
                    <h1 className={styles['header__heading']}>
                        Nuclear Shop
                    </h1>
                </div>
                <div className={styles['header__section']}>
                    <Navigation/>
                    <div className={styles['header__actions']}>
                        Icons
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;