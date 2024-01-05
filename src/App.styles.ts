import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: snow;
  width: 100%;
  padding: 0;
  position: relative;
  font-family: "Gentium Plus", serif;
`;

export const MainGrid = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
    gap: 5px;
    overflow-x: auto;
    padding: 10px;
`;
