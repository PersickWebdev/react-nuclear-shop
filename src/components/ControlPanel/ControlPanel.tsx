import React from 'react';
import styles from './ControlPanel.module.scss';
import { useDispatch } from 'react-redux';
import { CategoryItem } from '../../components';
import { DataActions } from '../../redux/actionCreators';
import { Search } from '../../ui';
import { ICategory } from '../../types';

interface IControlPanel {
    data: ICategory[];
    currentCategory: string;
    setCurrentCategory: (name: string) => void;
}

const ControlPanel = ({ data, currentCategory, setCurrentCategory }: IControlPanel) => {
    const dispatch = useDispatch();
    const categoryElements = data.map((category: ICategory) => {
        return (
            <CategoryItem
                key={category.categoryId}
                name={category.categoryName}
                isActive={category.categoryName === currentCategory}
                setCurrentCategory={setCurrentCategory}
            />
        );
    });

    const onClickHandler = () => {
        dispatch(DataActions.clearFiltered());
        setCurrentCategory('all');
    };

    return (
        <div className={styles['control-panel']}>
            <div className={styles['container']}>
                {/*<div className={styles['control-panel__search-box']}>*/}
                    <Search
                        id='search'
                        name='search'
                        placeholder='Enter product'
                    />
                {/*</div>*/}
                <div className={styles['control-panel__categories-box']}>
                    <ul className={styles['control-panel__categories-list']}>
                        <li
                            className={`${styles['control-panel__categories-list-item']} ${currentCategory === 'all' ? styles['isActive'] : ''}`}
                            onClick={onClickHandler}
                        >
                            All
                        </li>
                        {categoryElements}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default React.memo(ControlPanel);