import React from 'react'

// Components
import { Container } from "react-bootstrap";

const LoginSuccessPage = ({ user }) => {

  return (
    <Container className='d-flex justify-content-center'>
        <div className='mt-5 bg-dark w-50 p-4 shadow-lg rounded' style={{ height: '200px'}}>
            <p className='text-center text-light fs-1 fw-bold '>Welcome!</p>
            <hr className='text-light'/>
            <p className='text-center text-info fs-1 fw-bold '>{user.name}</p>

         </div>
    </Container>
  )
}

export default LoginSuccessPage;