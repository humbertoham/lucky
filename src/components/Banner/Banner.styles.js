import styled from "styled-components";
export const Wrapper = styled.div``;

export const Container = styled.div`
  background-image: url(${(props) => props.imgUrl});
  background-size: cover;
  background-attachment: fixed;
  /* Set a specific height */
  min-height: 600px;

  /* Create the parallax scrolling effect */
  background-position: center;

  position: relative;
  z-index: 0;

  &:before {
    background: rgba(0, 0, 0, 0.6);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }
  @media (max-width: 768px) {
    min-height: 600px;
    background-attachment: unset;
  }
`;

export const Text = styled.div`
  font-family: "Poppins", sans-serif;
  z-index: 1;
  padding-top: 200px;
  text-align: center;
  margin: auto;
  color: var(--white);
  font-size: var(--fontSuperBig);
  p {
    font-family: "Montserrat", sans-serif;
  }
  @media (max-width: 768px) {
    padding-top: 200px;
    font-size: var(--fontBig);
  }
`;

export const CardButton = styled.a`
  display: block;
  width: 600px;
  padding: 12px 0;
  font-family: 'Sofia Sans Semi Condensed', sans-serif;
  font-size: 2rem;
  font-weight: 100;
  color: #fff;
  background-color: #3a7c44;
  border: 5px solid #fff;
  border-radius: 15px;
  
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  text-decoration: none;
  margin: auto;
  
  filter: drop-shadow(10px 10px 10px #000);
  &:hover {
   transform: scale(1.2);
    transition-timing-function: ease-in-out;
    animation-duration:1s;
    color: #fff;
    }
    @media screen and (max-width:600px){
        width: auto;
        margin-right: 30px;
  margin-left: 30px;
    }
`;