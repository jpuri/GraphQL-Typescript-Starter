import * as React from 'react';
import { PureComponent } from 'react';
import { graphql, gql } from 'react-apollo';
import styled from 'styled-components';

const CREATE_PATIENT_MUTATION = gql`
  mutation CreatePatientMutation(
    $name: String!
    $address: String!
    $age: Int!
  ) {
    createPatient(name: $name, address: $address, age: $age) {
      name
      address
      age
    }
  }
`;

interface Props {
  createPatientMutation: any;
  history: any;
}

const Label = styled.span`
  width: 100px;
  display: inline-block;
  margin-left: 20px;
`;

const Field = styled.div`margin: 20px 0;`;

const Button = styled.button`margin: 20px;`;

class CreatePatient extends PureComponent<Props> {
  state = {
    name: undefined,
    address: undefined,
    age: undefined
  };

  updateValue = (event: any) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <div>
          <Field>
            <Label>Name</Label>
            <input
              value={this.state.name}
              onChange={this.updateValue}
              name="name"
              type="text"
              placeholder="Name"
            />
          </Field>
          <Field>
            <Label>Address</Label>
            <input
              value={this.state.address}
              onChange={this.updateValue}
              name="address"
              type="text"
              placeholder="Address"
            />
          </Field>
          <Field>
            <Label>Age</Label>
            <input
              value={this.state.age}
              onChange={this.updateValue}
              name="age"
              type="number"
              placeholder="Age"
            />
          </Field>
        </div>
        <Button onClick={() => this._createPatient()}>Submit</Button>
      </div>
    );
  }

  _createPatient = async () => {
    const { name, address, age } = this.state;
    const { createPatientMutation, history } = this.props;
    await createPatientMutation({
      variables: {
        name,
        address,
        age
      }
    });
    history.push(`/`);
  };
}

export default graphql(CREATE_PATIENT_MUTATION, {
  name: 'createPatientMutation'
})(CreatePatient as any);
