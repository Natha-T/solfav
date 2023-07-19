"use client";
import React, { useState } from "react";

export default function Login() {
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
            {/* Your login form goes here */}
            {/* Add a close button to hide the modal */}
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            Login
          </div>
        </div>
      ) : (
        <h1 className="" onClick={openModal}>
          Login
        </h1>
      )}
    </div>
  );
}
