import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Icons } from '../../ui';
import { DataActions } from '../../redux/actionCreators';
import styles from './Search.module.scss';

interface ISearch {
    id: string;
    name: string;
    placeholder: string;
}

const Search = ({ id, name, placeholder }: ISearch) => {
    const dispatch = useDispatch();

    const [ inputValue, setInputValue ] = useState<string>('');

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const searchHandler = () => {
        dispatch(DataActions.filter(inputValue));
    };

    return (
        <div className={styles['search']}>
            <input
                className={styles['search__element']}
                type="text"
                id={id}
                name={name}
                value={inputValue ?? ''}
                placeholder={placeholder}
                onChange={onChangeHandler}
            />
            <div className={styles['search__icon-box']}>
                {Icons.search({
                    className: `${styles['search__icon']}`
                }, searchHandler)}
            </div>
        </div>
    );
};

export default Search;