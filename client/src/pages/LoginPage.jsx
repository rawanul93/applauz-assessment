import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

// Components
import { Alert, Container, Form, Button } from "react-bootstrap";

const LoginPage = ({ handleSetUser }) => {

    let navigate = useNavigate();

    // error handling states for failed login
    const [showAlert, setShowAlert] = useState(false);
    const [error, setError] = useState('');

    // form validation and input states
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);

    const handleSubmit = async (event) => {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            event.stopPropagation();

            try {
                // calling the auth service
                const user = await axios.post('http://localhost:4000/auth/login', {
                    email,
                    password
                })

                if(user.data) { // if user exists
                    handleSetUser(user.data)
                    setShowAlert(false);
                    setError('');
                    navigate("/login-success")
                } else {
                    setShowAlert(true);
                    setError('User does not exist! Please enter the correct email and/or password.');
                }
                
            } catch (error) {
                console.log(error);

                // setting error message based on if server is down, or error message sent from server
                let errorMessage = (error.response && error.response.data.error ) || error.message
        
                setError(errorMessage); // set error message sent from backend
                setShowAlert(true);
            };
            
        }
        setValidated(true);
    };

  return (
    <Container >
      {showAlert && ( // show alert and error message for incorrect credentials
        <Alert variant='danger' dismissible onClose={() => setShowAlert(false)}>
          <Alert.Heading>Error</Alert.Heading>
          <hr />
          <p>{error}</p>
        </Alert>
      )}

        <div className='d-flex justify-content-center'>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className='shadow rounded-border mt-5 px-5'
          >
            <h3 className='mb-5 mt-5 bold'>Log in to your account</h3>
            <Form.Floating
              className='mb-3'
              style={{ maxWidth: "600px", minWidth: "400px" }}
            >
              <Form.Control
                required
                type='email'
                placeholder='user@wekick.ca'
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Label>Email</Form.Label>
              <Form.Control.Feedback type='invalid' className='left'>
                Please enter a valid email
              </Form.Control.Feedback>
            </Form.Floating>

            <Form.Floating className='mb-4'>
              <Form.Control
                required
                type='password'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Label>Password</Form.Label>
              <Form.Control.Feedback type='invalid' className='left'>
                Please enter the correct password
              </Form.Control.Feedback>
            </Form.Floating>

            <Button
              variant='dark'
              type='submit'
              size='lg'
              style={{ maxWidth: "600px", minWidth: "400px",  marginBottom: '40px'}}
            >
                Sign In
            </Button>

            <div className='mt-4'></div>
 
          </Form>
      </div>
    </Container>
  )
}

export default LoginPage;