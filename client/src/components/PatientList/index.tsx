import * as React from 'react';
import { PureComponent } from 'react';
import { graphql, gql } from 'react-apollo';
import Patient, { PatientIntf } from '../Patient';

const ALL_PATIENTS_QUERY = gql`
  # 2
  query AllPatientsQuery {
    allPatients {
      id
      name
      address
      age
    }
  }
`;

interface Props {
  allPatientsQuery: any;
}

export class PatientList extends PureComponent<Props> {
  render() {
    const { allPatientsQuery } = this.props;

    if (allPatientsQuery && allPatientsQuery.loading) {
      return <div>Loading</div>;
    }

    if (allPatientsQuery && allPatientsQuery.error) {
      return <div>Error</div>;
    }

    const { allPatients } = this.props.allPatientsQuery;

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {allPatients.map((patient: PatientIntf) =>
            <Patient key={patient.id} patient={patient} />
          )}
        </tbody>
      </table>
    );
  }
}

export default graphql(ALL_PATIENTS_QUERY, { name: 'allPatientsQuery' })(
  PatientList as any
);
