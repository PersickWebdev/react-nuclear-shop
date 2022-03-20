import React, { useState } from 'react';
import styles from './Header.module.scss';
import { Navigation } from '../../components';
import { Icons } from '../../ui';

interface IHeader {
    isMobile: boolean;
}

const Header = ({ isMobile = false }:IHeader) => {
    const [ isMobileHeaderShown, setIsMobileHeaderShown ] = useState<boolean>(false);

    const iconAdminHandler = () => {
        console.log('Admin icon clicked');
    };

    const iconCartHandler = () => {
        console.log('Cart icon clicked');
    };

    const showMobileHeader = () => {
        setIsMobileHeaderShown(true);
    };

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
                    <Navigation
                        isMobileHeaderShown={isMobileHeaderShown}
                        setIsMobileHeaderShown={setIsMobileHeaderShown}
                    />
                    <div className={styles['header__actions']}>
                        <div
                            className={styles['header__icon-box']}
                            onClick={iconAdminHandler}
                        >
                            {Icons.lock({
                                className: `${styles['header__icon']}`,
                            })}
                        </div>
                        <div
                            className={styles['header__icon-box']}
                            onClick={iconCartHandler}
                        >
                            {Icons.cart({
                                className: `${styles['header__icon']}`,
                            })}
                        </div>
                        {isMobile
                            ?
                            <div
                                className={`${styles['header__icon-box']} ${styles['burger']}`}
                                onClick={showMobileHeader}
                            >
                                {Icons.burger({
                                    className: `${styles['header__icon']}`,
                                })}
                            </div>
                            :
                            <></>
                        }
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;