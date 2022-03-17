import React from 'react';
import styles from './Navigation.module.scss';
import { NavigationItemObjects } from './NavigationItemObjects';
import { NavigationItem } from '../../components';

interface INavigation {}

interface INavigationItem {
    id: number;
    label: string;
    url: string;
}

const Navigation = ({}:INavigation) => {
    const navigationItems = NavigationItemObjects.map((item: INavigationItem) => {
        return (
            <NavigationItem
                key={item.id}
                label={item.label}
                url={item.url}
            />
        )
    });

    return (
        <nav className={styles['navigation']}>
            <ul className={styles['navigation__list']}>
                {navigationItems}
            </ul>
        </nav>
    );
};

export default Navigation;