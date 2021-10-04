import styled from "styled-components";

const Div = styled.div`
  & .settings {
    width: 600px;
    flex-wrap: wrap;
  }
  & h2 {
    color: #6882ef;
    font-size: 1.8rem;
    font-weight: bold;
  }
  & h4{
    font-weight:bold;
    color:gray;
  }
  & input[type=submit]{
    color:white;
  }
  label::first-letter,
  span::first-letter{
    text-transform:uppercase;
  }
  & .info-clean,
  .room,
  .bathroom{
    font-size:1.2rem;
  }
  & .info-clean{
    font-weight:500;
  }

  & .strip {
    border-top: 2px dotted grey;
    width: 100%;
  }
  & .backspiner{
    width:100%;
    height:100%;
    background-color: rgba(255, 255, 255, 0.6);
    z-index:1000;
    pointer-events: all;
  }
  & .spi{
    z-index:999;
  }

  & .tablo {
    width: 300px;
    height: 300px;
    margin:0 auto;
    align-self: center;
    text-align: center;
    border-radius: 10px;
  }
  & .initials {
    margin: 30px auto;
    width: 100px;
    height: 100px;
    border-radius: 60px;
    background-color: #ffd836;
    text-transform:uppercase;
  }
  & p {
    font-size: 1.5rem;
  }
  & .recover{
      font-size:1.2rem;
      text-decoration:underline;
      text-align:center;
      width:203px;
  }
  & .forInput{
      height:60px;
  }
  & .delete:hover{
    cursor:pointer;
  }
  & .dateAndCount{
    color:#0d6efd;
  }
  & .timeAndCount{
    color:#ffd836;
  }
  & ul{
    width:90%;
    height:356px;
    margin:0 auto;
    border-radius:30px;
    max-height:100%;
  }
  & .success{
    width:120px;
    height:40px;
    background-color:#ffd836;
    border-radius:10px;
    color:white;
    font-weight:600;
    font-size:1.2rem;
  }
  
`;
export default Div;
