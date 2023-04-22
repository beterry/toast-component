import React from 'react';

// COMPONENTS 
import ToastShelf from '../ToastShelf/ToastShelf';
import Button from '../Button';

// CONTEXT
import { ToastContext } from '../ToastProvider/ToastProvider';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
    const [ message, setMessage ] = React.useState('');
    const [ variant, setVariant ] = React.useState(VARIANT_OPTIONS[0]);
    const { addToast } = React.useContext(ToastContext);
    
    const handleSubmitForm = (e) => {
        e.preventDefault()

        const newToast = {
            id: Math.random(),
            variant,
            message,
        };

        // add toast using provider function
        addToast(newToast);

        // reset form to default
        setMessage('');
        setVariant(VARIANT_OPTIONS[0]);
    }

    return (
        <div className={styles.wrapper}>
            <header>
                <img alt="Cute toast mascot" src="/toast.png" />
                <h1>Toast Playground</h1>
            </header>

            <ToastShelf />

            <form className={styles.controlsWrapper} onSubmit={handleSubmitForm}>
                <div className={styles.row}>
                    <label
                        htmlFor="message"
                        className={styles.label}
                        style={{ alignSelf: 'baseline' }}
                    >
                        Message
                    </label>
                    <div className={styles.inputWrapper}>
                        <textarea 
                            id="message" 
                            className={styles.messageInput} 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label}>Variant</div>
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        {VARIANT_OPTIONS.map(variantOption => (
                            <label htmlFor={`variant-${variantOption}`} key={`variant-${variantOption}`}>
                                <input
                                    id={`variant-${variantOption}`}
                                    type="radio"
                                    name="variant"
                                    value={variantOption}
                                    checked={variantOption === variant}
                                    onChange={e => setVariant(e.target.value)}
                                />
                                {variantOption}
                            </label>
                        ))}
                    </div>
                </div>

                <div className={styles.row}>
                    <div className={styles.label} />
                    <div
                        className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                    >
                        <Button type='submit'>Pop Toast!</Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ToastPlayground;
