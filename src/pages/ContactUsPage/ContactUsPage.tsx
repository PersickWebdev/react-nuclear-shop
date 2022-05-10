import React, { useState } from 'react';
import styles from './ContactUsPage.module.scss';
import { ContactForm } from '../../components';
import {Modal} from "../../ui";

const ContactUsPage = () => {
    const [ isModalVisible, setIsModalVisible ] = useState<boolean>(false);

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
                    <ContactForm
                        setIsModalVisible={setIsModalVisible}
                    />
                </div>
            </div>
            <Modal
                heading='Your response confirmed!'
                message='Thanks for your feedback! It will help us to improve our service quality. Have a nice time :)'
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
            >
                <></>
            </Modal>
        </div>
    );
};

export default ContactUsPage;