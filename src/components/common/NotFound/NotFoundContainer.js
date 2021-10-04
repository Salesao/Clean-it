import styled from "styled-components";

const NotFoundContainer = styled.div`
  & div.main {
    font-size: 1.2rem;
    background-color: #fff;
    padding: 4rem;
    border-radius: 8px;
  }

  & div h1 {
    margin-bottom: 1.5rem;
    font-size: 2.5rem;
    font-weight: 700;
    ine-height: 1.1;
  }

  & div h1 div {
    font-size: 75%;
    margin-bottom: 0.25rem;
    color: #FFD836;
  }

  & div p {
    max-width: 700px;
    margin-bottom: 1.5rem;
  }

  & div ul {
    margin: 0 0 1.5rem 1.5rem;
    list-style-type: disc;
  }

  & div ul li {
    margin-bottom: 5px;
    max-width: 700px;
  }

  & img {
    width: 100%;
    position: relative;
    top: -10px;
    border-radius: 8px;
  }

  & a {
    color: #0366d6;
  }

  & a:hover {
    text-decoration: underline;
  }
`;

export default NotFoundContainer;