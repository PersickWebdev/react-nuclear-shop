import React, { useState } from 'react';
import styles from './Number.module.scss';

interface INumber {
    id: string;
    name: string;
    label: string;
    error: string;
    setFormData: (state: any) => void;
    setFormErrors: (state: any) => void;
}

const Number = ({ id, name, label, error, setFormData, setFormErrors }:INumber) => {
    const [ inputValue, setInputValue ] = useState<string>('');

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        setFormData((state: any) => {
            return {
                ...state,
                [name]: event.target.value,
            }
        });
        setFormErrors && setFormErrors((state: any) => {
            return {
                ...state,
                [name]: '',
            }
        });
    };

    return (
        <div className={`${styles['number']} ${error !== '' ? styles['error']: ''}`}>
            <label
                className={styles['number__label']}
                htmlFor={id}
            >
                {label}
                <input
                    className={styles['number__element']}
                    type="number"
                    id={id}
                    name={name}
                    value={inputValue}
                    onChange={onChangeHandler}
                />
            </label>
            {error !== ''
                ?
                <p className={styles['number__error']}>
                    {error}
                </p>
                :
                <></>
            }
        </div>
    );
};

export default Number;