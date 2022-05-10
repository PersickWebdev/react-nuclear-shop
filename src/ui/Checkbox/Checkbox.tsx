import React from 'react';
import styles from './Checkbox.module.scss';

interface ICheckbox {
    id: string;
    name: string;
    label: string;
    error: string;
    value: string;
    setFormData: (state: any) => void;
    setFormErrors: (state: any) => void;
}

const Checkbox = ({ id, name, label, error, value, setFormData, setFormErrors }:ICheckbox) => {
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setFormData((state: any) => {
                return {
                    ...state,
                    [name]: [...state[name], value]
                }
            });
        } else {
            setFormData((state: any) => {
                return {
                    ...state,
                    [name]: [...state[name].filter((item: string) => item !== value)]
                }
            });
        }

        setFormErrors && setFormErrors((state: any) => {
            return {
                ...state,
                [name]: ''
            }
        });
    };

    return (
        <div className={styles['checkbox']}>
            <label
                className={styles['checkbox__label']}
                htmlFor={id}
            >
                <input
                    className={styles['checkbox__element']}
                    type="checkbox"
                    id={id}
                    name={name}
                    onChange={onChangeHandler}
                />
                <span className={styles['checkbox__label-text']}>{label}</span>
                <div className={styles['checkbox__checkmark']}/>
            </label>
            {error !== ''
                ?
                <p className={styles['checkbox__error']}>
                    {error}
                </p>
                :
                <></>
            }
        </div>
    );
};

export default Checkbox;