import React, { useState } from 'react';
import styles from './Input.module.scss';

interface IInput {
    id: string;
    name: string;
    label: string;
    error: string;
    setOrderFormData: (state: any) => void;
    setOrderFormErrors: (state: any) => void;
}

const Input = ({ id, name, label, error, setOrderFormData, setOrderFormErrors }:IInput) => {
    const [ inputValue, setInputValue ] = useState<string>('');

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
        setOrderFormData((state: any) => {
            return {
                ...state,
                [name]: event.target.value
            }
        });
        setOrderFormErrors && setOrderFormErrors((state: any) => {
            return {
                ...state,
                [name]: ''
            }
        });
    }

    return (
        <div className={`${styles['input']} ${error !== '' ? styles['error'] : ''}`}>
            <label
                className={styles['input__label']}
                htmlFor={id}
            >
                {label}
                <input
                    className={styles['input__element']}
                    type="text"
                    id={id}
                    name={name}
                    value={inputValue}
                    onChange={onChangeHandler}
                />
            </label>
            {error !== ''
                ?
                <p className={styles['input__error']}>
                    {error}
                </p>
                :
                <></>
            }
        </div>
    );
};

export default Input;