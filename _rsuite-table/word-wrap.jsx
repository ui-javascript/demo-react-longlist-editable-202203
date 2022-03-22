import React from 'react';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/lib/less/index.less'; // or 'rsuite-table/dist/css/rsuite-table.css'

import fakeData from './data/simple-data.js';

const App = () => {
  const [data, setData] = React.useState(fakeData);
  return (
    <div style={{ width: 1200 }}>
      <button
        onClick={() => {
          setData([]);
        }}
      >
        Clear
      </button>
      {' | '}
      <button
        onClick={() => {
          setData(fakeData);
        }}
      >
        Reset
      </button>
      <hr />
      <Table
        wordWrap
        height={400}
        data={data}
        onRowClick={(data) => {
          console.log(data);
        }}
      >
        <Column width={70} align="center" fixed>
          <HeaderCell>Id</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column width={130} fixed flexGrow={1}>
          <HeaderCell>First Name</HeaderCell>
          <Cell dataKey="firstName" />
        </Column>

        <Column width={130}>
          <HeaderCell>Last Name</HeaderCell>
          <Cell dataKey="lastName" />
        </Column>

        <Column width={130}>
          <HeaderCell>City</HeaderCell>
          <Cell dataKey="city" />
        </Column>

        <Column width={130}>
          <HeaderCell>Street</HeaderCell>
          <Cell dataKey="street" />
        </Column>

        <Column width={130}>
          <HeaderCell>Company Name</HeaderCell>
          <Cell dataKey="companyName" />
        </Column>

        <Column width={100}>
          <HeaderCell>Email</HeaderCell>
          <Cell dataKey="email" />
        </Column>
      </Table>
    </div>
  );
};

export default App;
