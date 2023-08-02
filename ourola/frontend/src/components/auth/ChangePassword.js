import React, { useState } from 'react';
import styles from '../../style/auth/loginmodal.module.css';


const ChangePassword = ({ onClose }) => {

    const email = sessionStorage.getItem('ToChangePasswordEmail')
    
    return (
        <div className={styles.container}>
            <button className={styles.close} onClick={onClose}>
                X
            </button>

            <h1>change password</h1>
        </div>
    )
}

export default ChangePassword