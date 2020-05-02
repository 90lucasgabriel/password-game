import styled from 'styled-components';

import { animated } from 'react-spring';

export const ContainerWrapper = styled(animated.div)`
  overflow: hidden;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  /* background-color: #041641; */
  background-color: #379b68;
  background-color: #78dba8;
  background-color: #43a7a7;
  color: #f2f2f2;
  border-radius: 15px;
  margin-top: 10px;
  margin-bottom: 10px;
  height: 75px;
  overflow-y: hidden;
  position: relative;

  div.badge {
    position: absolute !important;
    right: 5px;
    top: 5px;
    background: #fff;
    border-radius: 50%;
    color: #43a7a7;
    min-width: 20px;
    height: 20px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
