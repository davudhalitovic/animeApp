import React, { createContext, useState } from 'react';

export const PreviewContext = createContext();

export const PreviewProvider = ({ children }) => {
    const [dataPreview, setDataPreview] = useState(null);

    return (
        <PreviewContext.Provider value={{ dataPreview, setDataPreview }}>
            {children}
        </PreviewContext.Provider>
    );
};
