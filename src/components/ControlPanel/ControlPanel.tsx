import React from 'react';
import styles from './ControlPanel.module.scss';
import { useDispatch } from 'react-redux';
import { CategoryItem } from '../../components';
import { DataActions } from '../../redux/actionCreators';
import { Search, Select } from '../../ui';
import { ICategory } from '../../types';

interface IControlPanel {
    data: ICategory[];
    currentCategory: string;
    setCurrentCategory: (name: string) => void;
    setFilterValue: (filterValue: string) => void;
}

const ControlPanel = ({ data, currentCategory, setCurrentCategory, setFilterValue }: IControlPanel) => {
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
                <Search
                    id='search'
                    name='search'
                    placeholder='Enter product'
                    currentCategory={currentCategory}
                    setCurrentCategory={setCurrentCategory}
                />
                <Select
                    id='sort-by-price'
                    name='sortByPrice'
                    placeholder='Sort by price'
                    optionList={[
                        'from lowest to highest',
                        'from highest to lowest'
                    ]}
                    currentCategory={currentCategory}
                    setFilterValue={setFilterValue}
                    stylesCustom={{
                        marginRight: '10px'
                    }}
                />
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