import * as React from 'react';
import styled from 'styled-components';

export interface PatientIntf {
  id: string;
  name: string;
  address: string;
  age: number;
}

interface Props {
  patient: PatientIntf;
}

const Cell = styled.td`
  padding: 10px 30px;
  text-align: center;
`;

const Patient = ({ patient }: Props) =>
  <tr>
    <Cell>{patient.name}</Cell>
    <Cell>{patient.age}</Cell>
    <Cell>{patient.address}</Cell>
  </tr>;

export default Patient;
