import styled from "styled-components";

export const StyledHeader = styled.nav`
  display: flex;
  min-width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  top: 0px;
  padding: 15px;
  position: relative;
  box-shadow: #10274a 0 0 20px 3px;

  ul {
    button {
      width: 100px;
      padding: 10px;
      background-color: #0a192f;
      cursor: pointer;
      border: 1px solid #64ffda;
      border-radius: 4px;
      color: #64ffda;
      font-size: 14px;
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

      :hover {
        background-color: rgba(100, 255, 218, 0.2);
      }
    }
  }

  li {
    padding: 10px;
    border: 1px solid #0a192f;
    color: #ccd6f6;
    font-size: 14px;
    width: 140px;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    :hover {
      background-color: #0a192f;
      cursor: pointer;
      border: 1px solid #64ffda;
      border-radius: 4px;
      color: #64ffda;
      background-color: rgba(100, 255, 218, 0.2);
    }
  }
`;

export const StyledLottie = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  div {
    display: flex;
    width: 80px;
  }
`;
