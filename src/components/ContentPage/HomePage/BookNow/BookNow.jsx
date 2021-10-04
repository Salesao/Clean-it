import { Element } from "react-scroll";
import P from "../../../../StyledComponents/Paragraph";
import Calendar from "./Calendar/Calendar";
import CleanPeople from "./CleanPeople/CleanPeople";
import Selector from "./Selector/Selector";
import ContainerBookNow from "./styleBookNow";
import { Link as Scroll } from "react-scroll";


export default function BookNow() {

  return (
    <ContainerBookNow style={{height:"80vh"}}>
      <Element name="bookNow" />
      <div className="container content pt-5 pl-0 pr-0">
        <div className="left">
        <Selector/>
        <Calendar />
        </div>
        <div style={{marginTop:"3.5rem"}}>
          <P color={"white"} className="mb-2">Choose available expert and time:</P>
          <CleanPeople className={"cleanWorker"}/>
        </div>
      </div>
      <div className="text-center">
      <Scroll to="startPage"><div className="arrow up"></div></Scroll>
      </div>
    </ContainerBookNow>
  );
}