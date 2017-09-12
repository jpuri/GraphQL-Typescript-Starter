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
  deletePatient: Function;
}

const Cell = styled.td`
  padding: 10px 30px;
  text-align: center;
`;

class Patient extends React.Component<Props> {

  deletePatient = () => {
    const { patient: {id}, deletePatient } = this.props;
    deletePatient(id);
  }

  render() {
    const { patient } = this.props;
    return (
      <tr>
        <Cell onClick={this.deletePatient}>Delete</Cell>
        <Cell>{patient.name}</Cell>
        <Cell>{patient.age}</Cell>
        <Cell>{patient.address}</Cell>
      </tr>
    );
  }
};

export default Patient;
