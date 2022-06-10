import classes from './Modal.module.css';
import ReactDom from 'react-dom';
import { Fragment } from 'react';

const Backdrop = () => {
  return <div className={classes.backdrop} />;
};

const ModalOverlay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop />,
        document.getElementById('modal-overlay')
      )}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById('modal-overlay')
      )}
    </Fragment>
  );
};

export default Modal;
