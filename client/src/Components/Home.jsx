import React from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css'; // Import the CSS file

const Home = () => {
  return (
    <>
      <NavigationBar />
      <div className="carousel-container">
        <header className="carousel-header">
          <h1 className="display-4">Enter the World of Thrilling Bids</h1>
          <p className="lead mb-0">Where Every Bid Opens Doors to Possibilities</p>
          <Link to="/products" className="btn btn-primary mt-3">Start Bidding</Link>
        </header>

        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/premium-photo/business-lawyers-discussing-contract-papers-with-brass-scale-desk-office-law-legal-services-advice-justice-law-concept-picture-with-film-grain-effect_265022-48786.jpg?ga=GA1.1.1170622406.1720676433&semt=ais_user"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Exciting Auctions</h3>
              <p>Join our exciting online auctions and bid on your favorite items.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src='https://img.freepik.com/premium-photo/business-lawyers-discussing-contract-papers-with-brass-scale-desk-office-law-legal-services-advice-justice-law-concept_265022-13610.jpg?ga=GA1.1.1170622406.1720676433&semt=ais_user'
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Exclusive Products</h3>
              <p>Get access to exclusive products available only through our platform.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://img.freepik.com/premium-photo/concept-public-sale-auction-top-view_185193-101024.jpg?ga=GA1.1.1170622406.1720676433&semt=ais_user"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Bid and Win</h3>
              <p>Place your bids and win amazing prizes and deals.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p>&copy; 2024 Online Bidding Platform. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
