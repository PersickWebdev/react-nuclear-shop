import React, { useState } from 'react';
import styles from './Radio.module.scss';

interface IRadio {
    id: string;
    name: string;
    label: string;
    value: string;
    error: string;
    setFormData: (state: any) => void;
    setFormErrors: (state: any) => void;
}

const Radio = ({ id, name, label, value, error, setFormData, setFormErrors }:IRadio) => {

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
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
        <div className={`${styles['radio']} ${error !== '' ? styles['error'] : ''}`}>
            <label
                className={styles['radio__label']}
                htmlFor={id}
            >
                <input
                    className={styles['radio__element']}
                    type="radio"
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChangeHandler}
                />
                <span className={styles['radio__label-text']}>{label}</span>
                <div className={styles['radio__checkmark']}/>
            </label>
            {error !== ''
                ?
                <p className={styles['radio__error']}>
                    {error}
                </p>
                :
                <></>
            }
        </div>
    );
};

export default Radio;