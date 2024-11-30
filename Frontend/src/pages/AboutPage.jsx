import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
  <h1 className="text-center">About Us</h1>
  <hr />
  <p className="lead text-start">
    Tabiadar Art Press is a renowned Manufacturer and Supplier of artistically designed Wedding Cards.
    Our Wedding Cards are aesthetically pleasing and available in various elegant color combinations and 
    designs. Customers who come to us go back contended with Wedding Cards of their taste and choice. 
    The Wedding Cards that we offer are made by blending creativity with quality to offer cards that meet 
    the expectations of the customers. The company was founded by Mr. Lalit K. Dhawan in the year 1984 at
    Punjab, India. With his rich experience of 34 years in this domain, we have been able to garner a 
    distinguished position in the market. We have a well-spread network round the world and are still
    attracting many customers owing to our dedication and passion towards our work.
  </p>

  {/* Infrastructure Section */}
  <h4 className="fw-bold text-start">Infrastructure</h4>
  <p className="lead text-start">
    We have a hi-tech infrastructural unit sprawling over an area of 1000 Sq. Feet. We possess Offset,
    Screen machinery that aids in the smooth manufacturing of exquisite Wedding Cards. 
    We can deliver a minimum of 100 pieces of Wedding Cards to our customers without any hassle.
  </p>

  {/* Team Section */}
  <h4 className="fw-bold text-start">Team</h4>
  <p className="lead text-start">
    We are assisted by the best team of creative employees who use their experience and creativity 
    to offer an innovative array of Wedding Cards. They blend colors with the splendors of designs 
    to create masterpieces on paper. We owe a major part of the success to our team.
  </p>

  {/* Network Section */}
  <h4 className="fw-bold text-start">Network</h4>
  <p className="lead text-start">
    It is a very difficult task for any entity to gain the trust of customers, but we did it with 
    our sincerity and commitment to quality in our work. We have developed a reputation not only 
    in the national market but also internationally. Some of the countries where our Wedding Cards 
    are demanded the most are:
  </p>
  <ul className="lead text-start">
    <li>UK</li>
    <li>USA</li>
    <li>Canada</li>
  </ul>
</div>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://i.ibb.co/nPkGSdg/card.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Wedding Cards</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://i.ibb.co/RDJc1CR/box.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Boxes</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://i.ibb.co/t4wcsp9/bag-3.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Carry Bags</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://i.ibb.co/p3KYM7g/money-2.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Money Envelopes</h5>
              </div>
            </div>
          </div>
        </div>
      
      <Footer />
    </>
  )
}

export default AboutPage