import * as React from 'react';
import { ComponentClass } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  padding: 0 20px;
`;

const Title = styled.span`font-size: 20px;`;

const AppLink: ComponentClass<any> = styled(Link)`
  margin-left: 20px;
`;

const Header = () =>
  <Wrapper>
    <Title>Clinic Management</Title>
    <span>
      <AppLink to="/">List</AppLink>
      <AppLink to="/create">Create</AppLink>
    </span>
  </Wrapper>;

export default withRouter(Header);
