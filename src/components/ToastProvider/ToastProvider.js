import React from "react";

import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({children}) {
    const [toasts, setToasts] = React.useState([]);

    const handleEscapeKey = React.useCallback(() => {clearToasts()}, [])
    useEscapeKey(handleEscapeKey);

    const addToast = (newToast) => {
        const nextToasts = [...toasts, newToast];
        setToasts(nextToasts);
    }

    const removeToast = (id) => {
        const nextToasts = toasts.filter(toast => toast.id !== id);
        setToasts(nextToasts);
    }

    const clearToasts = () => {
        setToasts([]);
    }

    return (
        <ToastContext.Provider value={{toasts, addToast, removeToast, clearToasts}}>
            {children}
        </ToastContext.Provider>
    );
}

export default ToastProvider;
