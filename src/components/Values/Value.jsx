import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  text-align: center;
  padding: 8px 24px;
  color: ${props => (props.isPositive ? '#388E3C' : '#D32F2F')};
  user-select: none;
`;

const Label = styled.p`
  margin-top: 0;
  margin-bottom: 8px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 24px;
`;

const Amount = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 48px;
`;

const Value = ({ label, value, isPositive }) => (
  <Container isPositive={isPositive}>
    <Label>{label}</Label>
    <Amount>{value}&nbsp;&#x24;</Amount>
  </Container>
);
Value.defaultProps = { isPositive: false };

Value.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isPositive: PropTypes.bool,
};

export default Value;
