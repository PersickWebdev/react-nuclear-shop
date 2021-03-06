import React, { useState } from 'react';
import styles from './Input.module.scss';

interface IInput {
    id: string;
    name: string;
    label: string;
    error: string;
    setFormData: (state: any) => void;
    setFormErrors: (state: any) => void;
}

const Input = ({ id, name, label, error, setFormData, setFormErrors }:IInput) => {
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