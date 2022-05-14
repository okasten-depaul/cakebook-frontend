import ListGroup from "react-bootstrap/ListGroup";
import * as cookbooksAPI from "./api/cookbook";


const createCookbooksList =() => {
  const cookbooks = cookbooksAPI.getCookbooks();
  return cookbooks.map(cookbook => <p className="centerItem" key={cookbook.id}>{cookbook.name}</p>)
}

function Cookbooks() {
  return (
    <div className="centerContainer">
      <h1 className="title">My Cookbooks</h1>
      {createCookbooksList()}
    </div>
    
  )
}

export default Cookbooks;