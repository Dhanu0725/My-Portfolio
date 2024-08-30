import React from 'react';
import './ResumePopup.css'; // Add your styles here

const ResumePopup = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="resume-popup-overlay">
            <div className="resume-popup-content">
                <button className="close-button" onClick={onClose}>✕</button>
                <embed src={require('../assets/Dhanusree_Kodali_Resume.pdf')} type="application/pdf" width="100%" height="600px" />
            </div>
        </div>
    );
};

export default ResumePopup;
