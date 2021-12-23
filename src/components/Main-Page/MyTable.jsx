import React from 'react';
import { Button, ButtonGroup, Table } from 'react-bootstrap';
import { useGetUsersQuery, useDeleteUserMutation } from '../redux/addReducer';


const MyTable = () => {

  const { data, isLoading } = useGetUsersQuery();

  const [deleteUser] = useDeleteUserMutation();

  if (isLoading) return <h1>Loading....</h1>

  const handleDeleteUser = async (id) => {
    alert(`are you sure to delete this user ${id}`)
    await deleteUser(id).unwrap();
  }

  return (
    <Table bordered hover style={{ cursor: 'pointer' }}>
      <thead>
        <tr>
          <th>№</th>
          <th>Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      {data && data.map((dt) => (
        <tbody key={dt.id}>
          <tr>
            <td>{dt.id}</td>
            <td>{dt.first_name}</td>
            <td>{dt.last_name}</td>
            <td>{dt.email}</td>
            <td>{dt.phone}</td>
            <td>  <ButtonGroup>
              <Button style={{ marginRight: '5px' }} variant='danger' onClick={() => handleDeleteUser(dt.id)}>
                Delete
              </Button>
            </ButtonGroup>
            </td>
          </tr>
        </tbody>
      ))}
    </Table>
  )
}

export default MyTable;
