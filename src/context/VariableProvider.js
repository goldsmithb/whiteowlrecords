import React, { useState, useEffect, createContext} from 'react';


const defaultState = {
    isMobile: false,
}

const VariableContext = createContext(defaultState);

export const VariableProvider = ({ children }) => {
    const isBrowser = () => typeof window !== "undefined"
    const [width, setWidth] = useState(isBrowser() ? window.innerWidth : null);

    useEffect(() => {
        if (!isBrowser()) {
            return;
        }
        window.addEventListener('resize', handleWindowSizeChange);

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    function handleWindowSizeChange() {
        if (isBrowser()) {
            setWidth(window.innerWidth);
        }
    }

    return (
        <VariableContext.Provider value={{ isMobile: (width <= 768) }}>
            {children}
        </VariableContext.Provider>
    )
}

export default VariableContext;