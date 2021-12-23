import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useAddUserMutation } from '../redux/addReducer';

const MyForm = () => {
  
  const { register, formState: { errors, isValid }, handleSubmit, reset, } = useForm({ mode: "onBlur" });
  
  // eslint-disable-next-line no-unused-vars
  const [addUser, { isError }] = useAddUserMutation();

  const onSubmit = (data) => {
    addUser(data).unwrap();
    reset();
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} style={{ width: '450px', padding: '20px' }}>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control {...register("email", { required: "Please enter your email!" })} placeholder="email"/>
        <div style={{ height: '10px', color: 'red' }}>{errors?.email && <p>{errors?.email?.message || "Error!"}</p>}</div>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control {...register("first_name", { required: "Please enter your Name!", minLength: { value: 5, message: "invalid name min 5 symbols" } })} placeholder="First name" />
        <div style={{ height: '10px', color: 'red' }}>{errors?.first_name && <p>{errors?.first_name?.message || "Error!"}</p>}</div>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Last Name</Form.Label>
        <Form.Control {...register("last_name", { required: "Please enter your Last Name!" })} placeholder="Last Name"/>
        <div style={{ height: '10px', color: 'red' }}>{errors?.last_name && <p>{errors?.last_name?.message || "Error!"}</p>}</div>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control {...register("phone", { required: "Please enter your phone!", valueAsNumber: true })} placeholder="phone"/>
        <div style={{ height: '10px', color: 'red' }}>{errors?.phone && <p>{errors?.phone?.message || "Error!"}</p>}</div>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control {...register("password", { required: "Please enter your password!", valueAsNumber: true })} placeholder="password"/>
        <div style={{ height: '10px', color: 'red' }}>{errors?.password && <p>{errors?.password?.message || "Error!"}</p>}</div>
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!isValid}>
        Submit
      </Button>
    </Form>
  )
}

export default MyForm;
