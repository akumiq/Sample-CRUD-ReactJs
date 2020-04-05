import React from 'react';
import { Table } from 'reactstrap';

const DataSantri = () => {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nama Santri</th>
          <th>Jurusan Santri</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default DataSantri
