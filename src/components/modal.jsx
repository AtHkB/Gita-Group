import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import '../modal.css';

export const Modal = (props) => (
  <Popup trigger={<button className='button'> {props.buttonText} </button>} modal>
    {(close) => (
      <div className='PopupModal'>
        <button className='close' onClick={close}>
          &times;
        </button>
        <div className='header'> {props.title} </div>
        <div className='content'>       
          <p dangerouslySetInnerHTML={{ __html: props.description }}></p>
        </div>
      </div>
    )}
  </Popup>
);
