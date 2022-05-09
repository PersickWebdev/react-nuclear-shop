import React from 'react';
import styles from './ConstructorPage.module.scss';

interface IConstructorPage {

}

const ConstructorPage = ({}:IConstructorPage) => {
    return (
        <div className={styles['constructor-page']}>
            <h2>
                Construct your own burger
            </h2>
            Construct Form
        </div>
    );
};

export default ConstructorPage;