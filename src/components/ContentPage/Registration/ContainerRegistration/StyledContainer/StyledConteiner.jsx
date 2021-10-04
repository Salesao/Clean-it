import styled from "styled-components";


const StyledDiv = styled.div`

border-radius:30px;

  & h1{
    color:#6882ef;
    font-size:1.8rem;
    font-weight:bold;
    text-align:center;
  }
  & span{
    font-weight:bold;
    font-size:1rem;
  }
  & span:first-letter{
    text-transform:uppercase;
  }
  & button{
  background-color:${props => props.backColor || "#6882ef"};
  color:white;
  border-color:${props => props.borderColor || "#6882ef"};
  font-size:1.5rem;
  font-weight:bold;
  max-width:20rem;
  min-width:40rem;
  margin:0 auto;
  }

  & button:hover,button:focus{
    color:white;
    background-color:${props => props.hoverBackgroundColor || "#0b5ed7"};
    border-color:${props => props.hoverBorderColor || "#0b5ed7"};
  }

  & .form-label{
    font-weight:700;
  }

  & .input__wrapper {
    width: 100%;
    position: relative;
    margin: 15px 0;
    text-align: center;
  }
  & .input__file-button .input__file-icon-wrapper img{
      width: 50px;
      filter: brightness(0) invert(1);
  }
  & .input__file {
    opacity: 0;
    visibility: hidden;
    position: absolute;
  }
   
  & .input__file-icon-wrapper {
    height: 60px;
    width: 60px;
    display: flex;
    justify-content: center;
    border-right: 1px solid #0b5ed7;
    background-color: #f9d859;
  }
   
  & .input__file-button-text {
    width: 100%;
    text-align: center;
    align-self: center;
    color: white;
  }
   
  & .input__file-button {
    width: 100%;
    max-width: 290px;
    height: 60px;
    color: #fff;
    transition:0.5s;
    font-size: 1.125rem;
    font-weight: 700;
    display: flex;
    justify-content: flex-start;
    border-radius: 20px;
    cursor: pointer;
    margin: 0 auto;
  }

  & .disabled{
    cursor:not-allowed;
    pointer-events:none;
    opacity:0.6;
  }

  & .info:first-letter{
    text-transform:uppercase;
  }

  & .content{
    max-width:45rem;
    min-width:20rem;
    margin:0 auto;
    height:80vh;
  }

  & .img{
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin: 0 auto;
  }
  & .errorSignIn{
    text-align:center;
    font-weight:bold;
    font-size:1.2rem
  }
`

const Div = props => {
    return <StyledDiv {...props}/>
}

export default Div;