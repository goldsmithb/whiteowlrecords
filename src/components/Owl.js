import React from 'react';

const Owl = ({ setShowOwl }) => {
    const closeModal = () => {
        sessionStorage.setItem('hasOwlBeenShown', true);
        setShowOwl(false);
    };

    return (
        
            <div className="modal">
                <span className="close" onClick={closeModal}>CLOSE!</span>
            </div>
        
    );
};

export default Owl;
