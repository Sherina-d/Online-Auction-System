import React, { useState } from 'react';
import NavigationBar from './NavigationBar';
import { Card, Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './products.css'
const Products = () => {
  // Example product data
  const [showBidModal, setShowBidModal] = useState(false); // State for controlling modal visibility
  const [selectedProduct, setSelectedProduct] = useState(null); // State to store selected product for bidding
  const [bidAmount, setBidAmount] = useState(''); // State for capturing bid amount

  const products = [
    {
      id: 1,
      name: '2 Rs 1998 Deshbandhu Chittaranjan Das ',
      
      price: 100,
      image: 'https://i0.wp.com/coinbazzar.com/wp-content/uploads/2023/12/109-5.jpg?w=900&ssl=1'
    },
    {
      id: 2,
      name: '2 Rs 1992 Land Vital Resources ',
      price: 150,
      image: 'https://i0.wp.com/coinbazzar.com/wp-content/uploads/2023/12/107-4.jpg?w=609&ssl=1'
    },
    {
      id: 3,
      name: '1 Rs 1985 International Youth Year ',
      
      price: 150,
      image: 'https://i0.wp.com/coinbazzar.com/wp-content/uploads/2023/12/112-3.jpg?w=420&ssl=1'
    },
    {
      id: 4,
      name: '2 Rs 1985 Reserve Bank of India ',
      
      price: 150,
      image: 'https://i0.wp.com/coinbazzar.com/wp-content/uploads/2023/12/117-2.jpg?w=435&ssl=1'
    },
    {
      id: 5,
      name: '2 Rs 150 Years of Telecommunication ',
      
      price: 150,
      image: 'https://i0.wp.com/coinbazzar.com/wp-content/uploads/2023/12/119-3.jpg?w=900&ssl=1'
    },
    {
      id: 6,
      name: '10 Rs 1996 Subhash Chandra Bose',
      
      price: 150,
      image: 'https://i0.wp.com/coinbazzar.com/wp-content/uploads/2023/12/123-1.jpg?w=799&ssl=1'
    },
    {
      id: 7,
      name: '5 Rupee 2007 Tilak Ji',
      price: 150,
      image: 'https://i0.wp.com/coinbazzar.com/wp-content/uploads/2023/12/124-1.jpg?w=900&ssl=1'
    },
    {
      id: 8,
      name: 'One Rupee 1881 Queen Victoria',
      
      price: 150,
      image: 'https://i0.wp.com/coinbazzar.com/wp-content/uploads/2023/12/24-12.jpg?resize=768%2C768&ssl=1'
    },
    {
      id: 9,
      name: 'Jawahar Lal Nehru(AD 1989)',
      price: 150,
      image: 'https://i0.wp.com/coinbazzar.com/wp-content/uploads/2024/07/2733C.jpg?resize=768%2C770&ssl=1'},
    {
      id: 10,
      name: ' 5 Rs University of Mysore Centenary',
     
      price: 150,
      image: 'https://i0.wp.com/coinbazzar.com/wp-content/uploads/2023/12/3037-original.jpg?resize=768%2C768&ssl=1'
    },
    {
      id: 11,
      name: '5 Rs Rare Chatrapati Shivaji Maharaj Ji',
      
      price: 150,
      image: 'https://i0.wp.com/coinbazzar.com/wp-content/uploads/2023/12/20230626_143243.jpg?fit=1400%2C1400&ssl=1'
    },
    {
      id: 12,
      name: '5 Rs 2005 75 Years of Dandi March ',
      price: 150,
      image: 'https://i0.wp.com/coinbazzar.com/wp-content/uploads/2023/12/116-4.jpg?w=536&ssl=1'
    }
  ];

  const handleClose = () => setShowBidModal(false);

  const handleShowBidModal = (product) => {
    setSelectedProduct(product);
    setShowBidModal(true);
  };

  const handleBidSubmit = (event) => {
    event.preventDefault();
    // Handle bid submission logic here (e.g., send bid amount to server for selectedProduct)
    console.log('Bid amount:', bidAmount, 'for product:', selectedProduct.name);
    // Close the modal after submission
    handleClose();
  };

  return (
    <>
      <NavigationBar />
      <div className="container mt-4">
        <h2 className="text-center mb-4 text-white" >Our Products</h2>
        <div className="row">
          {products.map(product => (
            <div key={product.id} className="col-md-4 mb-4">
              <Card className='bg-dark'>
                <Card.Header><Card.Img variant="top" src={product.image}  className="product-image " /></Card.Header>
                
                <Card.Body className='text-white br-20px'>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>Price: ${product.price}</Card.Text>
                  <Button variant="primary" onClick={() => handleShowBidModal(product)}>Bid now!</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Bid Modal */}
      <Modal show={showBidModal} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title >Place Your Bid</Modal.Title>
  </Modal.Header>
  <Modal.Body className='bg-dark text-white p-5 border border-white '>
    <Form onSubmit={handleBidSubmit}>
      <Form.Group controlId="bidAmount">
        <Form.Label>Enter Your Bid Amount for {selectedProduct?.name}:</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter amount"
          value={bidAmount}
          onChange={(e) => setBidAmount(e.target.value)}
          required
        />
      </Form.Group>
      <Link to={"/bids"} className='btn btn-primary mt-3' type="submit">
        Submit Bid
      </Link>
    </Form>
  </Modal.Body>
</Modal>

    </>
  );
};

export default Products;
