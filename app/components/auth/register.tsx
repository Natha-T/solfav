"use client";
import React, { useState } from "react";

export default function Register() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      {modalVisible ? (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
        >
          <div className="w-[600px] flex flex-col">
            {/* Your registration form goes here */}
            {/* Add a close button to hide the modal */}
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            Register
          </div>
        </div>
      ) : (
        <h1 id="register-text" onClick={openModal}>
          Register
        </h1>
      )}
    </div>
  );
}
