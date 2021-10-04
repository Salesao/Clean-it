import styled from "styled-components";

const Div = styled.div`

border-radius:30px;
width:100%;

& h2{
  font-size:1.5rem;
}
& h2 span{
  font-weight:bold;
  color:#6882EF;
}
& img{
  width:153px;
  height:153px;
  border-radius:80px;
}
& .counts{
  width:100%
}
& .counts .count{
  width:40%;
  background-color:gray;
  borderRadius:30px;
}
& .counts .count p{
  font-weight:bold;
  font-size:1.5rem;
  color:white;
  text-align:center;
}
& .send{
  width:100%;
  font-weight:bold;
  color:white;
}
& label::first-letter,
  span::first-letter{
    text-transform:uppercase;
}
& span{
  font-weight:bold;
}
& .btn{
    border-radius:0;
}
`
export default Div