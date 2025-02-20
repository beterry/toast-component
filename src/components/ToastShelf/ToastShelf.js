import React, { useContext } from 'react';

// CONTEXT
import { ToastContext } from '../ToastProvider/ToastProvider';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
    const { toasts } = useContext(ToastContext);

    return (
        <ol 
            className={styles.wrapper}
            role='region'
            aria-live='polite'
            aria-label='Notification'
        >
            {toasts.map(({ variant, message, id }) => (
                <li className={styles.toastWrapper} key={id}>
                    <Toast variant={variant} id={id}>{message}</Toast>
                </li>
            ))}
        </ol>
    );
}

export default ToastShelf;
