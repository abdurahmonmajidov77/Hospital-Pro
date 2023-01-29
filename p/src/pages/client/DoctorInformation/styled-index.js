import styled from "styled-components";

export const Wrapper = styled.div`
padding: 3%;
color: black;
display: flex;
div{
  /* width: fit-content; */
}
  img {
    width: 60%;
    height: 40%;
    border-radius: 2vw;

    @media screen and (max-width: 610px) {
      width: 100%;
      
    }
  }
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: 610px) {
    text-align: center;
  }
`;
