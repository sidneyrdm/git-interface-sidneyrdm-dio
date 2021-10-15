import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin: 16px 16px;
  width: 350px;
  height: 150px;
  align-content: center;
  font-weight: bold;
  color: #ffff;
  background-color: #E6a217;

  &:hover {
    background-color: #303036;
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const WrapperTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 8px 0;
`;

export const WrapperFullName = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
  color: #ffff;
`;

export const WrapperLink = styled.a`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
  color: #3182ce;

  &:hover {
    font-size: 20px;
    font-weight: bold;
    background-color: #FFFFFF;
    box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
  }
`;
