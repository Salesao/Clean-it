import styled from "styled-components";

const StyledNav = styled.nav`

    position:relative;
    
    & li{
        font-size:1.2rem;
    }
    & .done{
        color:green;
        opacity:0.6;
        font-weight:bold;
        cursor:default;
    }
    & .active{
        font-weight:bold;
        border-bottom:3px solid #6882ef;
        color:black;
        opacity:1;
    }

    & .arrow{
        float: left;
        width: 50px;
        height: 50px;
        border-top: solid 10px #6882ef;
        border-right: solid 10px #6882ef;
        margin: 33px 0 0px 20px;
        transform: rotate(-135deg);
        transition:0.5s;

    }
    & .arrow:after{
        content: "";
        display: block;
        width: 10px;
        height: 50px;
        background: #6882ef;
        margin-left: 18px;
        margin-top: -7.7px;
        transform: rotate(-135deg);
        transition:0.5s;
      }
    & .arrow:hover{
        border-top: solid 12px #ffd836;
        border-right:solid 12px #ffd836;
        cursor:pointer;
        & .arrow:after{
            background:#ffd836
        }
    }
    & .arrow:hover:after{
        background:#ffd836;
        width:12px;
        margin-top: -11px;
    }
`

const Nav = ({children}) => {
    return <StyledNav>
        {children}
    </StyledNav>
}

export default Nav;