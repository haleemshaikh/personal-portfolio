import axios from "axios";
import React, { useState } from "react";
import { AppProperties } from "../AppProperties";
import DismissableAlert from "./DismissableAlert";

export default function ContactForm() {
  const loca = AppProperties.loca;
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("");
  const [alertMsg, setAlertMsg] = useState("");
  const [response, setResponse] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    {console.log("formData: ", formData)}
  };

  const showAlertFn = (msg, type, show) => {
    setAlertMsg(msg);
    setAlertType(type);
    setShowAlert(show);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("loca: ", loca, formData);
    axios
      .post(`${loca}/portfolio/send-email`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      }, console.log("This api is hit."))
      .then((res) => {
        showAlertFn("Message sent successfully", "success", true);
        setFormData({ name: "", email: "", message: "" });
        setLoading(false);
      })
      .catch((error) => {
        showAlertFn("Something went wrong", "error", true);
        setResponse(JSON.stringify(error));
        setLoading(false);
      });
  };
  return (
    <>
      <div className="my-2">
        {showAlert && (
          <DismissableAlert
            type={alertType}
            msg={alertMsg}
            onClose={() => showAlertFn("", "", false)}
          />
        )}
      </div>
      <form
        className={`${loading ? "opacity-50 cursor-wait" : ""}`}
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 font-bold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        {loading ? (
          <button
            id="loadingButton"
            className="inline-flex items-center gap-x-2 justify-center px-3 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none transition duration-150 ease-in-out"
          >
            <span className="loading-spinner w-5 h-5 border-4 border-t-transparent border-white border-solid rounded-full animate-spin"></span>
            <span className="button-text">Sending Message</span>
          </button>
        ) : (
          <button
            type="submit"
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        )}
      </form>
    </>
  );
}