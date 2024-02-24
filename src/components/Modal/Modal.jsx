import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { nanoid } from 'nanoid';

import tripCities from '../../assets/cities.json';
import PropTypes from 'prop-types';

import {
  ModalBackdrop,
  ModalContetnt,
  CloseButton,
  FirstContainer,
  SecondContainer,
  Form,
  Select,
  Label,
  Input,
  SaveButton,
} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal() {
  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

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

  useEffect(() => {
    setCities(tripCities);
  }, []);

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
          <CloseButton onClick={toggleModal}>
            <AiOutlineClose />
          </CloseButton>
        </FirstContainer>
        <SecondContainer>
          <Form onSubmit={handleFormSubmit}>
            <Label htmlFor="city">City</Label>
            <Select name="city" onChange={handleChange} required>
              {cities.map((city) => (
                <option key={city.name} value={city.name}>
                  {city.name}
                </option>
              ))}
            </Select>
            <Label htmlFor="startDate">Start date</Label>
            <Input
              type="text"
              onChange={handleChange}
              name="startDate"
              placeholder="Enter date in format: YYYY-MM-DD"
              pattern="\d{4}-\d{2}-\d{2}"
              title="Please enter a date in the format YYYY-MM-DD"
              required
            />
            <Label htmlFor="endDate">End date</Label>
            <Input
              type="text"
              onChange={handleChange}
              name="endDate"
              placeholder="Enter date in format: YYYY-MM-DD"
              required
            />
            <SaveButton type="submit">Save</SaveButton>
          </Form>
        </SecondContainer>
      </ModalContetnt>
    </ModalBackdrop>,
    modalRoot
  );
}

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
