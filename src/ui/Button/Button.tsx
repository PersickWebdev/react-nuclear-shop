import React from 'react';
import styles from './Button.module.scss';
import { useUtils } from '../../utils';

interface IButton {
    id: string;
    name: string;
    children: any;
    stylesPreset?: any;
    stylesCustom?: any;
    action?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

// Button presets:
//      - link
//      - success
//      - warning

const presetOptions: string[] = ['link', 'success', 'warning'];

const Button = ({ id, name, children, action, stylesPreset, stylesCustom }:IButton) => {
    const { getAdditionalClass } = useUtils();
    const additionalClass = getAdditionalClass(presetOptions, stylesPreset);

    return (
        <button
            className={`${styles['button']} ${styles[additionalClass]}`}
            style={stylesCustom ? stylesCustom : {}}
            id={id}
            name={name}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => action ? action(event) : null}
        >
            {children}
        </button>
    );
};

export default Button;