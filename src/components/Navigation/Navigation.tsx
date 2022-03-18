import React from 'react';
import styles from './Navigation.module.scss';
import { NavigationItemObjects } from './NavigationItemObjects';
import { NavigationItem } from '../../components';

interface INavigation {
    isMobileHeaderShown: boolean;
    setIsMobileHeaderShown: (state: boolean) => void;
}

interface INavigationItem {
    id: number;
    label: string;
    url: string;
}

const Navigation = ({ isMobileHeaderShown = false, setIsMobileHeaderShown }:INavigation) => {

    const navigationItems = NavigationItemObjects.map((item: INavigationItem) => {
        return (
            <NavigationItem
                key={item.id}
                label={item.label}
                url={item.url}
                isMobileHeaderShown={isMobileHeaderShown}
                setIsMobileHeaderShown={setIsMobileHeaderShown}
            />
        )
    });

    return (
        <nav className={`${styles['navigation']} ${isMobileHeaderShown ? styles['isMobile'] : ''}`}>
            <ul className={styles['navigation__list']}>
                {navigationItems}
            </ul>
        </nav>
    );
};

export default Navigation;