import React from 'react';
import styles from './Button.module.scss';
import { useUtils } from '../../utils';

interface IButton {
    id: string;
    name: string;
    children: any;
    action?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    stylesPreset?: any;
}

// Button presets:
//      - link

const presetOptions: string[] = ['link'];

const Button = ({ id, name, children, action, stylesPreset }:IButton) => {
    const { getAdditionalClass } = useUtils();
    const additionalClass = getAdditionalClass(presetOptions, stylesPreset);

    return (
        <button
            className={`${styles['button']} ${styles[additionalClass]}`}
            id={id}
            name={name}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => action ? action(event) : null}
        >
            {children}
        </button>
    );
};

export default Button;