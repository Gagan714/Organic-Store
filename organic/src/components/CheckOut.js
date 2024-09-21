import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "./CartSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const CheckOut = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "India",
    streetAddress: "",
    apartment: "",
    city: "",
    state: "",
    pinCode: "",
    phone: "",
    email: "",
    orderNotes: ""
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    
    // Clear the cart after order submission
    dispatch(clearCart());

    // Show a success message
    toast.success("Order placed! Continue shopping.");

    // Redirect to the homepage after placing the order
    setTimeout(() => {
      navigate("/");
    }, 5000); // Redirect after 3 seconds
  };

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-bold mb-4">Billing Details</h2>

        <label className="block mb-2">
          First name *
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="block w-full mt-1 p-2 border rounded"
          />
        </label>

        <label className="block mb-2">
          Last name *
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="block w-full mt-1 p-2 border rounded"
          />
        </label>

        <label className="block mb-2">
          Company name (optional)
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border rounded"
          />
        </label>

        <label className="block mb-2">
          Country / Region *
          <input
            type="text"
            name="country"
            value={formData.country}
            disabled
            className="block w-full mt-1 p-2 border rounded bg-gray-200"
          />
        </label>

        <label className="block mb-2">
          Street address *
          <input
            type="text"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            required
            className="block w-full mt-1 p-2 border rounded"
          />
        </label>

        <label className="block mb-2">
          Apartment, suite, unit, etc. (optional)
          <input
            type="text"
            name="apartment"
            value={formData.apartment}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border rounded"
          />
        </label>

        <label className="block mb-2">
          Town / City *
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="block w-full mt-1 p-2 border rounded"
          />
        </label>

        <label className="block mb-2">
          State *
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            className="block w-full mt-1 p-2 border rounded"
          >
            <option value="">Select an option…</option>
            {indianStates.map((state, index) => (
              <option key={index} value={state}>{state}</option>
            ))}
          </select>
        </label>

        <label className="block mb-2">
          PIN Code *
          <input
            type="text"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
            required
            className="block w-full mt-1 p-2 border rounded"
          />
        </label>

        <label className="block mb-2">
          Phone *
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="block w-full mt-1 p-2 border rounded"
          />
        </label>

        <label className="block mb-2">
          Email address *
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="block w-full mt-1 p-2 border rounded"
          />
        </label>

        <label className="block mb-2">
          Order notes (optional)
          <textarea
            name="orderNotes"
            value={formData.orderNotes}
            onChange={handleChange}
            className="block w-full mt-1 p-2 border rounded"
          />
        </label>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white p-3 rounded mt-4 hover:bg-purple-700"
        >
          Place Order
        </button>
      </form>
    </>
  );
};

export default CheckOut;
