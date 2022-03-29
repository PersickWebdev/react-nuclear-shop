import React, { useState } from 'react';
import styles from './Search.module.scss';
import { Icons } from '../../ui';

interface ISearch {
    id: string;
    name: string;
    placeholder: string;
    setSearchValue: (state: any) => void;
}

const Search = ({ id, name, placeholder, setSearchValue }: ISearch) => {
    const [ inputValue, setInputValue ] = useState<string>('');

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    }

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
                }, () => setSearchValue(inputValue))}
            </div>
        </div>
    );
};

export default Search;