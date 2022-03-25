import React from 'react';
import styles from './OrderForm.module.scss';
import { Input, Button, Textarea } from '../../ui';
import { IOrderFormErrors } from '../../types';

interface IOrderForm {
    orderFormErrors: IOrderFormErrors;
    setOrderFormData: (state: any) => void;
    setOrderFormErrors: (state: any) => void;
    submitHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
    cancelHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const OrderForm = ({ setOrderFormData, orderFormErrors, setOrderFormErrors, submitHandler, cancelHandler }:IOrderForm) => {
    return (
        <form
            className={styles['order-form']}
        >
            <div className={styles['order-form__section']}>
                <Input
                    id='first-name'
                    name='firstName'
                    label='First name:'
                    error={orderFormErrors.firstName}
                    setOrderFormData={setOrderFormData}
                    setOrderFormErrors={setOrderFormErrors}
                />
            </div>
            <div className={styles['order-form__section']}>
                <Input
                    id='phone'
                    name='phone'
                    label='Phone:'
                    error={orderFormErrors.phone}
                    setOrderFormData={setOrderFormData}
                    setOrderFormErrors={setOrderFormErrors}
                />
            </div>
            <div className={styles['order-form__section']}>
                <Input
                    id='email'
                    name='email'
                    label='Email:'
                    error={orderFormErrors.email}
                    setOrderFormData={setOrderFormData}
                    setOrderFormErrors={setOrderFormErrors}
                />
            </div>
            <div className={styles['order-form__section']}>
                <Input
                    id='address'
                    name='address'
                    label='Address:'
                    error={orderFormErrors.address}
                    setOrderFormData={setOrderFormData}
                    setOrderFormErrors={setOrderFormErrors}
                />
            </div>
            <div className={styles['order-form__section']}>
                <Textarea
                    id='comment'
                    name='comment'
                    label='Your comment:'
                    error={orderFormErrors.comment}
                    setOrderFormData={setOrderFormData}
                    setOrderFormErrors={setOrderFormErrors}
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