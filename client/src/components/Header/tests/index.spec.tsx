import * as React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '../index';

describe('<Header>', () => {
  it('should return a non null value on rendering', () => {
    expect(shallow(<Header />)).not.toBe(null);
  });
});
