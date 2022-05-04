import React, { useState } from 'react';
import styles from './ContactForm.module.scss';
import { Button, Input, Textarea, Number } from '../../ui';
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

    const cancelHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
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
                Gender (Radio)
            </div>
            <div className={styles['contact-form__section']}>
                Preferable food (Checkbox)
            </div>
            <div className={styles['contact-form__section']}>
                 Food quality (Select)
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

export default ContactForm;