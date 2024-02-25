import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { selectModal } from '../../redux/carsSlice';

import PropTypes from 'prop-types';

import {
  ModalBackdrop,
  ModalContetnt,
  CloseButton,
  FirstContainer,
  SecondContainer,
} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClick }) {
  const modalCar = useSelector(selectModal);
  console.log('modalCar', modalCar);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        onClick();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClick]);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClick();
    }
  };

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContetnt>
        <FirstContainer>
          <p>Create your trip</p>
          <CloseButton onClick={onClick}>
            <AiOutlineClose />
          </CloseButton>
        </FirstContainer>
        <SecondContainer></SecondContainer>
      </ModalContetnt>
    </ModalBackdrop>,
    modalRoot
  );
}

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
};
