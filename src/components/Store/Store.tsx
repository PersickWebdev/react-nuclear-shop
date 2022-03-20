import React from 'react';
import styles from './Store.module.scss';

const Store = () => {
    return (
        <div className={styles['store']}>
            <ul className={styles['store__list']}>
                Store
            </ul>
        </div>
    );
};

export default Store;