import React, { useState } from 'react';
import styles from './ContactForm.module.scss';
import {Button, Input, Textarea, Number, Radio, Checkbox } from '../../ui';
import { IContactFormData, IContactFormErrors } from '../../types';

interface IContactForm {}

const ContactForm = ({}: IContactForm) => {
    const [ formData, setFormData ] = useState<IContactFormData>({
        name: '',
        age: '',
        gender: '',
        preferableFood: [],
        foodQuality: '',
        serviceSpeed: '',
        comment: '',
    });
    const [ formErrors, setFormErrors ] = useState<IContactFormErrors>({
        name: '',
        age: '',
        gender: '',
        preferableFood: '',
        foodQuality: '',
        serviceSpeed: '',
        comment: '',
    });

    const submitHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const formDataToSend = {
            name: formData.name,
            age: formData.age,
            gender: formData.gender,
            preferableFood: formData.preferableFood,
            foodQuality: formData.foodQuality,
            serviceSpeed: formData.serviceSpeed,
            comment: formData.comment,
        }

        console.log('ContactForm - formDataToSend: ', formDataToSend);
    };

    return (
        <form className={styles['contact-form']}>
            <div className={styles['contact-form__section']}>
                <Input
                    id='name'
                    name='name'
                    label='Name:'
                    error={formErrors.name}
                    setFormData={setFormData}
                    setFormErrors={setFormErrors}
                />
            </div>
            <div className={styles['contact-form__section']}>
                <Number
                    id='number'
                    name='age'
                    label='Age:'
                    error={formErrors.name}
                    setFormData={setFormData}
                    setFormErrors={setFormErrors}
                />
            </div>
            <div className={styles['contact-form__section']}>
                <h4 className={styles['contact-form__section-heading']}>
                    Gender:
                </h4>
                <Radio
                    id='gender-male'
                    name='gender'
                    value='male'
                    label='Male'
                    error={formErrors.gender}
                    setFormData={setFormData}
                    setFormErrors={setFormErrors}
                />
                <Radio
                    id='gender-female'
                    name='gender'
                    value='female'
                    label='Female'
                    error={formErrors.gender}
                    setFormData={setFormData}
                    setFormErrors={setFormErrors}
                />
            </div>
            <div className={`${styles['contact-form__section']} ${styles['checkboxes']}`}>
                <h4 className={styles['contact-form__section-heading']}>
                    Preferable types of food:
                </h4>
                <div>
                    <Checkbox
                        id='preferable-food-burgers'
                        name='preferableFood'
                        label='burgers'
                        value='burgers'
                        error={formErrors.preferableFood}
                        setFormData={setFormData}
                        setFormErrors={setFormErrors}
                    />
                    <Checkbox
                        id='preferable-food-pizza'
                        name='preferableFood'
                        label='pizza'
                        value='pizza'
                        error={formErrors.preferableFood}
                        setFormData={setFormData}
                        setFormErrors={setFormErrors}
                    />
                    <Checkbox
                        id='preferable-food-sweets'
                        name='preferableFood'
                        label='sweets'
                        value='sweets'
                        error={formErrors.preferableFood}
                        setFormData={setFormData}
                        setFormErrors={setFormErrors}
                    />
                    <Checkbox
                        id='preferable-food-vegetables'
                        name='preferableFood'
                        label='vegetables'
                        value='vegetables'
                        error={formErrors.preferableFood}
                        setFormData={setFormData}
                        setFormErrors={setFormErrors}
                    />
                </div>
            </div>
            <div className={styles['contact-form__section']}>

            </div>
            <div className={styles['contact-form__section']}>
                <Input
                    id='service-speed'
                    name='serviceSpeed'
                    label='Service speed:'
                    error={formErrors.serviceSpeed}
                    setFormData={setFormData}
                    setFormErrors={setFormErrors}
                />
            </div>
            <div className={styles['contact-form__section']}>
                <Textarea
                    id='comment'
                    name='comment'
                    label='Your comment or suggestion:'
                    error={formErrors.comment}
                    setFormData={setFormData}
                    setFormErrors={setFormErrors}
                />
            </div>
            <div className={styles['contact-form__buttons']}>
                <Button
                    id='button-confirm'
                    name='buttonConfirm'
                    stylesPreset='success'
                    action={(event: React.MouseEvent<HTMLButtonElement>) => submitHandler(event)}
                >
                    Confirm
                </Button>
            </div>
        </form>
    );
};

export default ContactForm;