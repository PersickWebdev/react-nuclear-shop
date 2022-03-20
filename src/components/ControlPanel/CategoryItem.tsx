import React from 'react';
import styles from './ControlPanel.module.scss';

interface ICategoryItem {
    name: string;
    isActive: boolean;
    setCurrentCategory: (name: string) => void;
}

const CategoryItem = ({ name, isActive, setCurrentCategory }: ICategoryItem) => {

    return (
        <li
            className={`${styles['control-panel__categories-list-item']} ${isActive ? styles['isActive'] : ''}`}
            onClick={() => setCurrentCategory(name)}
        >
            {name}
        </li>
    );
};

export default CategoryItem;