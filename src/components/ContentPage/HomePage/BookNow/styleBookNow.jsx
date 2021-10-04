import styled from "styled-components";

const StyledContainerBookNow = styled.div`
background-color: #6882EF;
height:44rem;

& .content{
  display:flex;
}
& .left{
  height: 41rem;
  flex-grow:1;
}
& .cleanWorker{
  height: 30.5rem;
  min-width: 36rem;
  max-width:60rem;
  background: white;
  padding: 20px;
  border-radius:30px;
}

.arrow {
  display: inline-block;
  width: 60px;
  height: 60px;
  background: transparent;
  text-indent: -9999px;
  border-top: 2px solid white;
  border-left: 2px solid white;
  transition: all 250ms ease-in-out;
  text-decoration: none;
  color: transparent;
}

.arrow:hover {
  border-color: #f9d859;
  border-width: 8px;
  cursor:pointer;
}

.arrow:before {
  display: block;
  height: 100%;
  width: 100%;
  margin-left: -50%;
  margin-top: -50%;
  content: "";
}

.arrow.up {
  transform: rotate(45deg);
  left: 175px;
}
    
`

export default StyledContainerBookNow