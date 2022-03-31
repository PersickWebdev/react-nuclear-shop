import React from 'react';
import styles from './ControlPanel.module.scss';
import { useDispatch } from 'react-redux';
import {DataActions} from "../../redux/actionCreators";

interface ICategoryItem {
    name: string;
    isActive: boolean;
    setCurrentCategory: (name: string) => void;
}

const CategoryItem = ({ name, isActive, setCurrentCategory }: ICategoryItem) => {
    const dispatch = useDispatch();

    const onClickHandler = () => {
        dispatch(DataActions.clearFiltered());
        setCurrentCategory(name);
    };

    return (
        <li
            className={`${styles['control-panel__categories-list-item']} ${isActive ? styles['isActive'] : ''}`}
            onClick={onClickHandler}
        >
            {name}
        </li>
    );
};

export default CategoryItem;