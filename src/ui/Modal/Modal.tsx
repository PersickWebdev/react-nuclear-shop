import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../ui';
import styles from './Modal.module.scss';

interface IModal {
    heading: string;
    message?: string;
    children?: any;
    isModalVisible: boolean;
    setIsModalVisible: (state: any) => void;
}

const Modal = ({ heading, message, children, isModalVisible, setIsModalVisible }:IModal) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const div = modalRef.current;
        if (div) {
            if (isModalVisible) {
                div.classList.add(styles['visible']);
                document.body.style.overflow = 'hidden';
            } else {
                div.classList.remove(styles['visible']);
                document.body.style.overflow = '';
            }
        }
    }, [isModalVisible]);

    return (
        <div
            className={styles['modal']}
            ref={modalRef}
        >
            <div className={styles['modal__content']}>
                <h4 className={styles['modal__heading']}>
                    {heading}
                </h4>
                <p className={styles['modal__message']}>
                    {message}
                </p>
                <div className={styles['modal__body']}>
                    {children}
                </div>
                <div className={styles['modal__buttons']}>
                    <Button
                        id='button-ok'
                        name='button-ok'
                        stylesPreset='link'
                    >
                        <Link
                            className={styles['modal__link']}
                            to="/store"
                            onClick={() => setIsModalVisible(false)}
                        >
                            OK
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Modal;