import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 41px;
  background: #F7F6F9;
`;

export const Tab = styled.div`
  background-color: '#F9FAFB';
  color: #73819B;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-style: normal;
  line-height: 19px;
  letter-spacing: 0em;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
  &.active {
    color: #9D3789;
    font-weight: 700;
    border-bottom: 2px solid #9D3789;
  }
`;