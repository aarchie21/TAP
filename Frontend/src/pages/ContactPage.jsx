// import React from "react";
// import { Footer, Navbar } from "../components";

// const ContactPage = () => {
//   return (
//     <>
//       <Navbar />
//       <div className="container my-3 py-3">
//         <h1 className="text-center">Contact Us</h1>
//         <hr />
//         <h2 className="text-center mb-4">Get Your Customized Prices</h2>
//         <div className="row my-4 h-100">
//           <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
//             <form>
//               <div className="form my-3">
//                 <label htmlFor="Name">Name</label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="Name"
//                   placeholder="Enter your name"
//                 />
//               </div>
//               <div className="form my-3">
//                 <label htmlFor="Email">Email</label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="Email"
//                   placeholder="name@example.com"
//                 />
//               </div>
//               <div className="form my-3">
//                 <label htmlFor="Quantity">Quantity</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="Quantity"
//                   placeholder="Enter the quantity"
//                   min="1"
//                 />
//               </div>
//               <div className="form my-3">
//                 <label htmlFor="Inserts">Number of Inserts</label>
//                 <input
//                   type="number"
//                   className="form-control"
//                   id="Inserts"
//                   placeholder="Enter the number of inserts"
//                   min="0"
//                 />
//               </div>
//               <div className="form my-3">
//                 <label htmlFor="Message">Message</label>
//                 <textarea
//                   rows={5}
//                   className="form-control"
//                   id="Message"
//                   placeholder="Enter your message"
//                 />
//               </div>
//               <div className="text-center">
//                 <button
//                   className="my-2 px-4 mx-auto btn btn-dark"
//                   type="submit"
//                   disabled
//                 >
//                   Send
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ContactPage;

import React, { useState } from "react";
import { Footer, Navbar } from "../components";

const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    setFormSubmitted(true); // Show the popup message
    setTimeout(() => {
      setFormSubmitted(false); // Hide the popup after a few seconds
    }, 3000);
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <h2 className="text-center mb-4">Get Your Customized Prices</h2>
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="form my-3">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Quantity">Quantity</label>
                <input
                  type="number"
                  className="form-control"
                  id="Quantity"
                  placeholder="Enter the quantity"
                  min="1"
                  required
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Inserts">Number of Inserts</label>
                <input
                  type="number"
                  className="form-control"
                  id="Inserts"
                  placeholder="Enter the number of inserts"
                  min="0"
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Message">Message</label>
                <textarea
                  rows={5}
                  className="form-control"
                  id="Message"
                  placeholder="Enter your message"
                  required
                />
              </div>
              <div className="text-center">
                <button
                  className="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        {formSubmitted && (
          <div
            className="alert alert-success text-center mt-4"
            role="alert"
            style={{
              position: "fixed",
              top: "10%",
              left: "50%",
              transform: "translate(-50%, 0)",
              zIndex: 1000,
              width: "300px",
            }}
          >
            Your query will be reverted back in 2 business days.
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
