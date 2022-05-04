import React from 'react';
import styles from './OrderForm.module.scss';
import { Input, Button, Textarea } from '../../ui';
import { IOrderFormErrors } from '../../types';

interface IOrderForm {
    formErrors: IOrderFormErrors;
    setFormErrors: (state: any) => void;
    setFormData: (state: any) => void;
    submitHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
    cancelHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const OrderForm = ({ setFormData, formErrors, setFormErrors, submitHandler, cancelHandler }:IOrderForm) => {
    return (
        <form
            className={styles['order-form']}
        >
            <div className={styles['order-form__section']}>
                <Input
                    id='first-name'
                    name='firstName'
                    label='First name:'
                    error={formErrors.firstName}
                    setFormData={setFormData}
                    setFormErrors={setFormErrors}
                />
            </div>
            <div className={styles['order-form__section']}>
                <Input
                    id='phone'
                    name='phone'
                    label='Phone:'
                    error={formErrors.phone}
                    setFormData={setFormData}
                    setFormErrors={setFormErrors}
                />
            </div>
            <div className={styles['order-form__section']}>
                <Input
                    id='email'
                    name='email'
                    label='Email:'
                    error={formErrors.email}
                    setFormData={setFormData}
                    setFormErrors={setFormErrors}
                />
            </div>
            <div className={styles['order-form__section']}>
                <Input
                    id='address'
                    name='address'
                    label='Address:'
                    error={formErrors.address}
                    setFormData={setFormData}
                    setFormErrors={setFormErrors}
                />
            </div>
            <div className={styles['order-form__section']}>
                <Textarea
                    id='comment'
                    name='comment'
                    label='Your comment:'
                    error={formErrors.comment}
                    setFormData={setFormData}
                    setFormErrors={setFormErrors}
                />
            </div>
            <div className={styles['order-form__buttons']}>
                <Button
                    id='button-confirm'
                    name='buttonConfirm'
                    stylesPreset='success'
                    action={(event: React.MouseEvent<HTMLButtonElement>) => submitHandler(event)}
                >
                    Confirm
                </Button>
                <Button
                    id='button-cancel'
                    name='buttonCancel'
                    stylesPreset='warning'
                    action={(event: React.MouseEvent<HTMLButtonElement>) => cancelHandler(event)}
                >
                    Cancel
                </Button>
            </div>
        </form>
    );
};

export default OrderForm;