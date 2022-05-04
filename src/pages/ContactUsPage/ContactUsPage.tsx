import React from 'react';
import styles from './ContactUsPage.module.scss';
import { ContactForm } from '../../components';

const ContactUsPage = () => {
    return (
        <div className={styles['contact-us-page']}>
            <div className={styles['container']}>
                <div className={styles['contact-us-page__wrap']}>
                    <h3 className={styles['contact-us-page__heading']}>
                        Leave us your feedback
                    </h3>
                    <p className={styles['contact-us-page__paragraph']}>
                        Please, fill out a short contact form to improve the
                        quality of our service.
                    </p>
                    <ContactForm/>
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;