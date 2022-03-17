import React from 'react';
import styles from './Navigation.module.scss';
import { Link } from 'react-router-dom';

interface INavigationItem {
    label: string;
    url: string;
}

const NavigationItem = ({ label, url }:INavigationItem) => {
    return (
        <li className={styles['navigation__item']}>
            <Link to={url}>
                {label}
            </Link>
        </li>
    );
};

export default NavigationItem;