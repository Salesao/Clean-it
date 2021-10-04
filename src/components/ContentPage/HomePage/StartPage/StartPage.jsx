import Title from "../../../../StyledComponents/Title";
import P from "../../../../StyledComponents/Paragraph";
import Button from "../../../../StyledComponents/Button";
import defaultImg from "../../../../img/ImgForStartPage/DefaultImg";
import { useDispatch } from "react-redux";
import { changePageCarusel } from "../../../../redux/carusel/carusel";
import { Link as Scroll} from "react-scroll";

export default function StartPage() {
  const dispatch = useDispatch();
  dispatch(changePageCarusel({page: "regularly"}));
  
  return (
    <div className="container d-flex justify-content-between mh-100 mt-4" style={{height: "80vh"}}>
      <div className="mt-5">
        <Title color={"#FFD836"}>always clean</Title>
        <Title transform={"uppercase"}>Home & office</Title>
        <P margin={"21px 0"}>
          It’s hard to find someone who enjoys cleaning. It takes a<br/>lot of
          energy, time, and you always have to do it when<br/>there are so many
          other things to do around you.
        </P>
        <P margin={"0 0 100px"}>
          Is it possible to make it so that your surroundings are<br/>clean, but not
          to create a constant torture of cleaning? Of<br/>course it is!
        </P>
        <Scroll to="bookNow"><Button>Book now</Button></Scroll>
      </div>
      <div className="flex-shrink-3">
        <img src={defaultImg.washFloor} alt="" />
      </div>
    </div>
  );
}