
import P from "../../../../../StyledComponents/Paragraph";
import Lable from "./StyledPeople";
import styled from "styled-components";
import AboutMe from "./AboutCleaners";
import Time from "./Time/Time";
import { useState } from "react";
import initCleaners from "./initCleaners";
import cardAvatar from "../../../../../img/ImgForCard/CardImg";
import { useSelector } from "react-redux";
import { SelectSelector } from "../../../../../redux/FilterCleanersBook/FilterClianerBook";
const Ul = styled.ul`
overflow-y:scroll;
max-height:29rem;
& .about{
    display:flex;
    justify-content:space-between;
    align-items:center;
}
& .split{
    border-top:1px solid black;
}
& .ClianerImg{
    width:85px;
    height:85px;
    border-radius:50px;
}
& textarea{
    width:65%;
    text-align:justify;
    height:7.5rem;
    border:0
}
`



export default function CleanPeople({className}){

    const {selectClean} = useSelector(SelectSelector)
    let [Cleaners,ChangeCleaners] = useState(initCleaners);

    
    const CheckInfo = (index,info) => {
        const tmp = [...Cleaners]
        tmp[index] = {...tmp[index],info:info}
        return ChangeCleaners(Cleaners = tmp)
    }
    
    
    return(
        <>
        <Ul className={className}>
            {Cleaners.map((c,i) => {
                
                return <li  style={{display:c.specialty !== selectClean?"none":"block"}} key={i}><Lable for="toggle">
                    <input type="checkbox"
                    id="toggle"
                    checked={c.info}
                    onChange={(e) => {
                        CheckInfo(i,e.target.checked)
                    }}/>
                    <img className="ClianerImg" src={c.img} alt=""/>
                    <div className="info mx-2">
                        <h1>{c.name},{c.age}</h1>
                        <P>{c.specialty}</P>
                        <br/>
                        <P>Rating: <button>4.6</button></P>
                    </div>
                    <div className="align-self-start pe-2 flex-grow-1">
                        <div className="d-flex align-items-center">
                        <img src={cardAvatar.email} alt=""/><h2 className="ms-1">{c.jobMail}</h2>
                        </div>
                        <div className="d-flex align-items-center my-1">
                        <img src={cardAvatar.phone} alt=""/><h2 className="ms-1">{c.jobPhone}</h2>
                        </div>
                        {c.telegram !== "" &&
                        <div className="d-flex align-items-center">
                        <img style={{height:"24px",width:"24px"}} src={cardAvatar.telegram} alt=""/><h2 className="ms-1">{c.telegram}</h2>
                        </div>
                        }
                    </div>
                    <div>
                    <Time/>
                    </div>
                </Lable>
                    {c.info && <AboutMe about={c.about} name={c.name} expert={c.specialty} img={c.img} id={c.id}/>}
                <div className={`split my-3`}></div>
            </li>
            })}
        </Ul>
        </>
    )
}