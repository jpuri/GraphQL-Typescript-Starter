import * as React from 'react';
import { shallow, mount } from 'enzyme';
import CreatePatient from '../index';

describe('<CreatePatient>', () => {
  it('should return a non null value on rendering', () => {
    expect(shallow(<CreatePatient />)).not.toBe(null);
  });
});
