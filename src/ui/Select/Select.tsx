import React, { useState, useEffect } from 'react';
import styles from './Select.module.scss';

interface ISelect {
    id: string;
    name: string;
    placeholder: string;
    optionList: string[];
}

const Select = ({ id, name, placeholder, optionList }:ISelect) => {
    const [ isVisible, setIsVisible ] = useState<boolean>(false);
    const [ inputValue, setInputValue ] = useState<string>('');

    const optionItems = optionList.map((item: string, index: number) => {
        return (
            <li
                className={styles['select__dropdown-item']}
                key={`${item}_${index}`}
                onClick={() => {
                    setInputValue(item);
                    setIsVisible(false);
                }}
            >
                {item}
            </li>
        );
    });

    return (
        <div className={styles['select']}>
            <input
                className={styles['select__input']}
                type="text"
                id={id}
                name={name}
                placeholder={inputValue !== '' ? inputValue : placeholder}
                onClick={() => setIsVisible(true)}
                value={inputValue ?? ''}
                readOnly
            />
            <ul className={`${styles['select__dropdown']} ${isVisible ? styles['isVisible'] : ''}`}>
                {optionItems}
                <li
                    className={styles['select__dropdown-item']}
                    onClick={() => {
                        setInputValue('');
                        setIsVisible(false);
                    }}
                >
                    none
                </li>
            </ul>
        </div>
    );
};

export default Select;