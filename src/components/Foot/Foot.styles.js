import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #000;
  height: 100px;
`;

export const Content = styled.div`
  padding-top: 20px;
  max-width: var(--maxWidth);
  margin: 0 auto;
  color: var(--white);
  text-align: center;
  p {
    font-size: 1.3rem;
    font-family: 'Sofia Sans Semi Condensed', sans-serif;
  }
`;
export const Red = styled.a`
  font-size: 1.5rem;
  padding: 10px;
  color: var(--white);

  text-decoration: none;

  :hover{
    color: white;
  }
`;