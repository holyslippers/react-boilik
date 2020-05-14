import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const MainLayout = () => (
  <div>
    <div>
      <Title>Hello World</Title>
      <p><Link to="/testList"><Button type="primary">Next</Button></Link></p>
    </div>
  </div>
);
