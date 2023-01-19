import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 75px;
`;

export const Container = styled.div``;

export const Text = styled.div`
  margin: auto;
  padding: 10px;
a{
  color: #000;
}
  h1 {
    font-weight: 900;
    font-family: 'Lato', sans-serif;
    font-size: var(--fontSuperBig);
    text-align: center;
    
    color: #000;
    @media (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;
export const Con = styled.div`
  margin: auto;
  padding: 10px;

  h1 {
    font-family: "Poppins", sans-serif;
    font-size: var(--fontBig);
    font-weight: 100;
    color: var(--white);
    text-align: center;
    @media (max-width: 768px) {
      font-size: var(--fontMed);
    }
  }
`;