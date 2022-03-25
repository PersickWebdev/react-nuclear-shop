import React from 'react';
import styles from './WelcomePage.module.scss';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
    return (
        <div className={styles['welcome-page']}>
            <div className={styles['container']}>
                <div className={styles['welcome-page__section']}>
                    <h2 className={styles['welcome-page__heading']}>
                        Welcome to Nuclear Shop!
                    </h2>
                    <div className={styles['welcome-page__description']}>
                        <p className={styles['welcome-page__paragraph']}>
                            We are glad to see you in our Nuclear Shop.
                        </p>
                        <p className={styles['welcome-page__paragraph']}>
                            Here you can order the most delicious burgers made by our chefs with care and love.
                        </p>
                        <div className={styles['welcome-page__images-box']}>
                            <img
                                className={styles['welcome-page__image']}
                                src="/images/burgers/double.png"
                                alt=""
                            />
                            <img
                                className={styles['welcome-page__image']}
                                src="/images/burgers/heavy.png"
                                alt=""
                            />
                            <img
                                className={styles['welcome-page__image']}
                                src="/images/burgers/king.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className={styles['welcome-page__buttons-box']}>
                        <Link
                            className={styles['welcome-page__link']}
                            to="/store"
                        >
                            GO TO STORE
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;