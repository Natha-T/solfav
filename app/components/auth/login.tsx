"use client";
import React, { useState, useRef } from "react";
import supabase from "../../utils/supabase";
export default function Login() {
  const [modalVisible, setModalVisible] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const modalRef = useRef();

  const openModal = (e) => {
    e.preventDefault();
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      username,
      email,
      password,
    };
    console.log("Form data submitted:", formData);
    // Add your logic here to handle form submission (e.g., API call for registration)
  };

  const handleModalClick = (e) => {
    // Prevent the click event from bubbling up to the parent and closing the modal
    e.stopPropagation();
  };

  return (
    <div>
      {modalVisible ? (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
        >
          {/* Your login form goes here */}
          {/* Add a close button to hide the modal */}
          <span className="close " onClick={closeModal}>
            &times;
          </span>
          <div
            onClick={handleModalClick}
            ref={modalRef}
            class="flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0"
          >
            <div class="w-full overflow-hidden w-[610px] bg-white p-8 shadow-sm dark:bg-gray-800 sm:max-w-md sm:rounded-lg">
              <div class="flex items-center justify-center">
                <a href="#">
                  <div class="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-700">
                    <svg
                      width="49"
                      height="48"
                      viewBox="0 0 49 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.98441 29.2899C1.98441 27.0299 2.42954 24.7919 3.29444 22.704C4.15935 20.6159 5.42701 18.7187 7.02513 17.1206C8.62324 15.5225 10.5204 14.2548 12.6084 13.3899C14.6965 12.5251 16.9344 12.0799 19.1945 12.0799V29.2899H1.98441Z"
                        class="ccustom"
                        fill="#442781"
                      ></path>
                      <path
                        d="M1.98441 29.2899C1.98441 31.55 2.42954 33.7879 3.29444 35.876C4.15935 37.964 5.42701 39.8612 7.02513 41.4593C8.62324 43.0574 10.5204 44.3251 12.6084 45.19C14.6965 46.0549 16.9344 46.5 19.1945 46.5V29.2899H1.98441Z"
                        class="ccompli1"
                        fill="#61459C"
                      ></path>
                      <path
                        d="M36.4043 29.2899C36.4043 31.55 35.9595 33.7879 35.0947 35.876C34.2298 37.964 32.9622 39.8612 31.3638 41.4593C29.7657 43.0574 27.8685 44.3251 25.7804 45.19C23.6925 46.0549 21.4545 46.5 19.1945 46.5V29.2899H36.4043Z"
                        class="ccompli2"
                        fill="#A992DB"
                      ></path>
                      <path
                        d="M47.0156 14.422C47.0156 21.5586 41.23 27.344 34.0935 27.344H21.1716V14.422C21.1716 7.2854 26.957 1.5 34.0935 1.5C41.23 1.5 47.0156 7.2854 47.0156 14.422Z"
                        class="ccustom"
                        fill="#FF7917"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>

              <form method="POST">
                <input
                  type="hidden"
                  name="_token"
                  value="GhpGn48rFRsMAQKf8HQEOWZsRb9F8VJQwwAQs6Ck"
                />

                <div class="mt-4">
                  <label
                    class="block text-sm font-medium text-gray-800 dark:text-gray-400"
                    for="email"
                  >
                    {" "}
                    Email{" "}
                  </label>

                  <input
                    class="inline-block w-full py-2 rounded-md dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border-transparent dark:border-gray-700 dark:hover:border-gray-700 dark:hover:focus:border-gray-700 focus:border-gray-300 hover:focus:border-gray-700 hover:border-gray-300 hover:focus:border-gray-300 focus:ring-0 text-sm mt-1 block w-full"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    required="required"
                  />
                </div>

                <div class="mt-4">
                  <label
                    class="block text-sm font-medium text-gray-800 dark:text-gray-400"
                    for="password"
                  >
                    {" "}
                    Password{" "}
                  </label>

                  <input
                    class="inline-block w-full py-2 rounded-md dark:text-gray-400 bg-gray-100 dark:bg-gray-900 border-transparent dark:border-gray-700 dark:hover:border-gray-700 dark:hover:focus:border-gray-700 focus:border-gray-300 hover:focus:border-gray-700 hover:border-gray-300 hover:focus:border-gray-300 focus:ring-0 text-sm mt-1 block w-full"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Your password"
                    required="required"
                    autocomplete="new-password"
                  />
                </div>

                <div class="mt-4 flex items-center justify-end">
                  <a
                    class="text-sm text-gray-600 underline hover:text-gray-900 dark:text-gray-400 dark:hover:text-blue-400"
                    href="#"
                  >
                    {" "}
                    Didnt have account?{" "}
                  </a>

                  <button
                    type="submit"
                    class="ml-4 inline-flex items-center rounded-lg bg-gray-200 p-2  font-bold  hover:bg-blue-400 dark:bg-gray-700 dark:hover:bg-blue-600-800"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
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
