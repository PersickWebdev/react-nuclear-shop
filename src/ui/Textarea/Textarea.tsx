import React, { useState } from 'react';
import styles from './Texarea.module.scss';

interface ITextarea {
    id: string;
    name: string;
    label: string;
    error: string;
    setOrderFormData: (state: any) => void;
    setOrderFormErrors: (state: any) => void;
}

const Textarea = ({ id, name, label, error, setOrderFormData, setOrderFormErrors }:ITextarea) => {
    const [ elementValue, setElementValue ] = useState<string>('');

    const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setElementValue(event.target.value);

        setOrderFormData((state: any) => {
            return {
                ...state,
                [name]: event.target.value
            }
        });

        setOrderFormErrors((state: any) => {
            return {
                ...state,
                [name]: ''
            }
        });
    }

    return (
        <div className={`${styles['textarea']} ${error !== '' ? styles['error'] : ''}`}>
            <label
                className={styles['textarea__label']}
                htmlFor={id}
            >
                {label}
                <textarea
                    className={styles['textarea__element']}
                    id={id}
                    name={name}
                    value={elementValue}
                    onChange={onChangeHandler}
                />
            </label>
            {error !== ''
                ?
                <p className={styles['textarea__error']}>
                    {error}
                </p>
                :
                <></>
            }
        </div>
    );
};

export default Textarea;