// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-dark text-light py-2">

//           <div className="col-md-4 text-md-end">
//   <div className="d-flex align-items-center justify-content-md-end">
//     <h5 className="fw-bold mb-0 me-0">Follow Us on </h5>
//     <a
//       href="https://www.instagram.com/tabiadarartpress84?igsh=ZTM2MHdzODVlYzU0"
//       target="_blank"
//       rel="noreferrer"
//       className="text-light fs-4"
//     >
//       <i className="fa fa-instagram"></i>
//     </a>
//   </div>
// </div>
// <hr className="my-4" />
//         <div className="text-center">
//           <p className="mb-0">
//             &copy; {new Date().getFullYear()} Tabiadar Art Press. All Rights Reserved.
//           </p>
//         </div>
      
//     </footer>
//   );
// };

// export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* First Column: Products */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold mb-3">Our Products</h5>
            <ul className="list-unstyled">
              <li>Wedding Cards</li>
              <li>Customized Boxes</li>
              <li>Event Invitations</li>
              <li>Gift Packaging</li>
            </ul>
          </div>

          {/* Second Column: Services */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold mb-3">Our Services</h5>
            <ul className="list-unstyled">
              <li>Printing Premium Cards</li>
              <li>Shipping Worldwide</li>
            </ul>
          </div>

          {/* Third Column: Contact and Socials */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold mb-3">Connect with Us</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://wa.me/yourwhatsapplink"
                  target="_blank"
                  rel="noreferrer"
                  className="text-light"
                >
                  <i className="fa fa-whatsapp me-2"></i>Contact Us on WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/tabiadarartpress84?igsh=ZTM2MHdzODVlYzU0"
                  target="_blank"
                  rel="noreferrer"
                  className="text-light"
                >
                  <i className="fa fa-instagram me-2"></i>Follow Us on Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4" />
        <div className="text-center">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Tabiadar Art Press. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
