import styled from "styled-components";

const Div = styled.div`
  & h1 {
    font-size: 2rem;
    font-weight: 500;
  }
  & p {
    font-size: 1.4rem;
    line-height:1.8rem;

  }
  & h2 {
    color: #6982ef;
    font-weight: 700;
    font-size: 1.6rem;
  }
`;

export default function AboutUs() {
  return (
    <Div className="container">
      <h1>About us</h1>
      <p className="my-4" >
        Thanks to our platform any freelance cleaner will be able to find their
        client! You can use it to suggest cleaning services that your clients
        can order from the comfort of their home or office! Register on our platform,
        provide your photo and the information about yourself and then your
        client definitely finds you!
      </p>
      <h2 className="text-center">Сlean it team wishes you a good day!!!</h2>
    </Div>
  );
}
