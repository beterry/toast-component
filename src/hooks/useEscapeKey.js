import React from 'react';

function useEscapeKey(callback) {
    // escape key will clear all toasts
    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') { callback(e) }
        }
        document.addEventListener('keydown', handleKeyDown);

        return () => { document.removeEventListener('keydown', handleKeyDown) }
    }, [callback])
}

export default useEscapeKey