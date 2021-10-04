

const Cleaner = ({name,expert,day,time,img}) => {
    return(
        <>
        <div className="d-flex flex-column align-items-center mt-3">
        <h2>{name}</h2>
        <img className="my-3" src={img} alt=""/>
        <h2>{expert}</h2>
      </div>
      <div className="my-4" style={{borderTop:"2px solid black"}}></div>
      <div className="d-flex justify-content-between">
        <h2>Date:<span>{day}</span></h2>
        <h2>Time:<span>{time}</span></h2>
      </div>
      </>
    )
}
export default Cleaner