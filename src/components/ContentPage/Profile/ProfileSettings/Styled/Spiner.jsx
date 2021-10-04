
const Spiner = () => {
    return(
        <>
        <div className="position-absolute backspiner"></div>
        <div style={{width:"3rem",height:"3rem"}} className="spinner-border text-warning position-absolute start-50 top-50 spi" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        </>
        
    )
}
export default Spiner