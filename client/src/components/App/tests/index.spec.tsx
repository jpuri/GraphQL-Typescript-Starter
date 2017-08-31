import * as React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../index';

jest.mock('react-router-dom', () => {
  return {
    NavLink: () => null,
    Link: () => null,
    withRouter: (component: any) => component
  };
});

describe('<App>', () => {
  it('should return a non null value on rendering', () => {
    expect(shallow(<App />)).not.toBe(null);
  });
});
