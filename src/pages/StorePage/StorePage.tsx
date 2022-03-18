import React from 'react';
import styles from './StorePage.module.scss';
import { Store } from '../../components';

const StorePage = () => {

    return (
        <div className={styles['store-page']}>
            <div className={styles['container']}>
                <Store/>
            </div>
        </div>
    );
};

export default StorePage;