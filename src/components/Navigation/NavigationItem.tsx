import React from 'react';
import styles from './Navigation.module.scss';
import { Link } from 'react-router-dom';

interface INavigationItem {
    label: string;
    url: string;
    isMobileHeaderShown: boolean;
    setIsMobileHeaderShown: (state: boolean) => void;
}

const NavigationItem = ({ label, url, isMobileHeaderShown = false, setIsMobileHeaderShown }:INavigationItem) => {
    return (
        <li className={styles['navigation__item']}>
            <Link
                to={url}
                onClick={isMobileHeaderShown ? () => setIsMobileHeaderShown(false) : () => null}
            >
                {label}
            </Link>
        </li>
    );
};

export default NavigationItem;