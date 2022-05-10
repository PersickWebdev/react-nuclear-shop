import React, { useState } from 'react';
import styles from './ContactForm.module.scss';
import { Button, Input, Textarea, Number, Radio, Checkbox } from '../../ui';
import { useValidator } from '../../utils';
import { IContactFormData, IContactFormErrors } from '../../types';

interface IContactForm {
    setIsModalVisible: (state: boolean) => void;
}

const ContactForm = ({ setIsModalVisible }: IContactForm) => {
    const {
        firstNameValidator,
        ageValidator ,
        genderValidator,
        preferableFoodValidator,
        serviceSpeedValidator
    } = useValidator();
    const [ formData, setFormData ] = useState<IContactFormData>({
        firstName: '',
        age: '',
        gender: '',
        preferableFood: [],
        foodQuality: '',
        serviceSpeed: '',
        comment: '',
    });
    const [ formErrors, setFormErrors ] = useState<IContactFormErrors>({
        firstName: '',
        age: '',
        gender: '',
        preferableFood: '',
        foodQuality: '',
        serviceSpeed: '',
        comment: '',
    });

    const submitHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const isValid = () => {
            const isNameValid = firstNameValidator({ formData, setFormErrors });
            const isAgeValid = ageValidator({ formData, setFormErrors });
            const isGenderValid = genderValidator({ formData, setFormErrors });
            const isPreferableFoodValid = preferableFoodValidator({ formData, setFormErrors });
            const isServiceSpeedValid = serviceSpeedValidator({ formData, setFormErrors });

            return isNameValid
                && isAgeValid
                && isGenderValid
                && isPreferableFoodValid
                && isServiceSpeedValid
        }

        if (!isValid()) return false;

        const formDataToSend = {
            name: formData.firstName,
            age: formData.age,
            gender: formData.gender,
            preferableFood: formData.preferableFood,
            foodQuality: formData.foodQuality,
            serviceSpeed: formData.serviceSpeed,
            comment: formData.comment,
        }
        setIsModalVisible(true);
        console.log('ContactForm - formDataToSend: ', formDataToSend);
    };

    return (
        <form className={styles['contact-form']}>
            <div className={styles['contact-form__section']}>
                <Input
                    id='name'
                    name='firstName'
                    label='Name:'
                    error={formErrors.firstName}
                    setFormData={setFormData}
                    setFormErrors={setFormErrors}
                />
            </div>
            <div className={styles['contact-form__section']}>
                <Number
                    id='number'
                    name='age'
                    label='Age:'
                    error={formErrors.age}
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