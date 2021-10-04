
import Title from "../../../StyledComponents/Title";
import ReduxCounter from "./OrdersChoice/ReduxCounter";
import Cleaner from "./OrdersChoice/WhoClean";
import Form from "./OrdersChoice/FormUserLive/LiveStreetUser";
import Div from "./styledOrder/StyledOrder";

const OrderPage = () => {
  const ordering = JSON.parse(localStorage.getItem("order"))


  return (
    <Div className="container bg-white shadow-lg">
        <Title className="text-center text-uppercase pt-4">Ordering</Title>
      <div className="d-flex" style={{height:"55vh"}}>
        <div style={{width:"50%"}}>
          <Cleaner
          name={ordering.name}
          expert={ordering.expert}
          day={ordering.day}
          time={ordering.time}
          img={ordering.img}
          />
          <h2 className="text-center my-5">Choose the number of {ordering.expert === "Windows cleaning"
          ?"windows and balconies"
          :" rooms and bathrooms"}</h2>
          <ReduxCounter expert={ordering.expert}/>
        </div>
        <div className="ms-5" style={{width:"50%"}}>
          <Form/>
        </div>
      </div>
    </Div>
  );
}
export default OrderPage