import React from 'react';
import styles from '../../style/auth/loginmodal.module.css';

function FindEmailResult({ userId, onClose}) {
  return (
    <div className={styles.container}>
      <button className={styles.close} onClick={onClose}>
        X
      </button>
      <p>사용자의 아이디는 {userId} 입니다.</p>
      {/* 이하 코드는 필요한 내용을 렌더링하거나 처리하는 로직 */}
    </div>
  );
}

export default FindEmailResult;
