import * as React from 'react';
import { shallow, mount } from 'enzyme';
import Patient from '../index';

describe('<Patient>', () => {
  it('should return a non null value on rendering', () => {
    expect(
      shallow(
        <Patient
          patient={{
            id: '123',
            name: 'test-name',
            address: 'test-address',
            age: 10
          }}
        />
      )
    ).not.toBe(null);
  });
});
