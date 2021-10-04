import { Link } from "react-router-dom"

const EmptyOrders = () => {
    return(
        <div style={{height:"100%"}} className="d-flex align-items-center justify-content-center flex-column">
            <h1>You have no ongoing cleanings</h1>
            <h4 className="my-4">You can schedule cleaning.</h4>
            <Link to="/">
                <input className="btn btn-warning" type="submit" value="Go to the book now."/>
            </Link>
        </div>
    )
}

export default EmptyOrders