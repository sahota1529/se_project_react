import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const AddItemModal = ({ handleCloseModal, onSubmit, isOpen }) => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [link, setLink] = useState("");
  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, weather, imageUrl: link });
  };

  const [weather, setWeather] = useState("");
  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  return (
    <ModalWithForm
      title="New garment"
      buttonText="Add garment"
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label htmlFor="imageUrl" className="modal__label">
        Image{" "}
        <input
          type="url"
          className="modal__input"
          id="imageUrl"
          placeholder="Image URL"
          value={link}
          onChange={handleLinkChange}
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label
          htmlFor="hot"
          className={`modal__label modal__label_type_radio ${
            weather === "hot"
              ? "modal__label_selected"
              : "modal__label_unselected"
          }`}
        >
          <input
            id="hot"
            type="radio"
            className="modal__radio-input"
            name="radiotype"
            onChange={handleWeatherChange}
            value={"hot"}
          />
          Hot
        </label>
        <label
          htmlFor="warm"
          className={`modal__label modal__label_type_radio ${
            weather === "warm"
              ? "modal__label_selected"
              : "modal__label_unselected"
          }`}
        >
          <input
            id="warm"
            type="radio"
            className="modal__radio-input"
            name="radiotype"
            onChange={handleWeatherChange}
            value={"warm"}
          />
          Warm
        </label>
        <label
          htmlFor="cold"
          className={`modal__label modal__label_type_radio ${
            weather === "cold"
              ? "modal__label_selected"
              : "modal__label_unselected"
          }`}
        >
          <input
            id="cold"
            type="radio"
            className="modal__radio-input"
            name="radiotype"
            onChange={handleWeatherChange}
            value={"cold"}
          />
          Cold
        </label>
      </fieldset>
      <button type="submit" className="modal__submit">
        Add garment
      </button>
    </ModalWithForm>
  );
};

export default AddItemModal;
