import React from 'react';
import { MdCallEnd } from 'react-icons/md';
import { hangUp } from '../../../utils/webRTC/webRTCHandler';
import './CallingDialog.css';

const styles = {
  buttonContainer: {
    marginTop: '10px',
    width: '40px',
    height: '40px',
    borderRadius: '40px',
    border: '2px solid #e6e5e8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

const CallingDialog = () => {
  const handlerHangUpButtonPressed = () => {
    hangUp();
  };

  return (
    <div className='direct_calling_dialog background_secondary_color'>
      <span>Calling</span>
      <div style={styles.buttonContainer} onClick={handlerHangUpButtonPressed}>
        <MdCallEnd style={{ width: '20px', height: '20px', fill: '#e6e5e8' }} />
      </div>
    </div>
  );
};

export default CallingDialog;
