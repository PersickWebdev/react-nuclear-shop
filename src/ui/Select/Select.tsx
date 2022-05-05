import React, { useState, useEffect } from 'react';
import { Icons } from '../../ui';
import styles from './Select.module.scss';


interface ISelect {
    id: string;
    name: string;
    placeholder: string;
    optionList: string[];
    setFilterValue?: (filterValue: string) => void;
    currentCategory?: string;
    stylesCustom?: any;
}

const Select = ({
    id,
    name,
    placeholder,
    optionList,
    setFilterValue,
    currentCategory,
    stylesCustom
}:ISelect) => {
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

    useEffect(() => {
        setFilterValue && setFilterValue(inputValue);
    }, [ inputValue ]);

    useEffect(() => {
        setInputValue('');
    }, [ currentCategory ]);

    return (
        <div
            className={styles['select']}
            style={stylesCustom ? stylesCustom : {}}
        >
            <input
                className={styles['select__input']}
                type="text"
                id={id}
                name={name}
                placeholder={inputValue !== '' ? inputValue : placeholder}
                value={inputValue ?? ''}
                readOnly
                onClick={() => setIsVisible(true)}
            />
            {Icons.arrow({
                className: `${styles['select__icon-arrow']} ${isVisible ? styles['isDown'] : ''}`
            })}
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