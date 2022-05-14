import { Nav } from 'react-bootstrap'
import * as cookbooksAPI from "./api/cookbook";


const createCookbooksList =() => {
  const cookbooks = cookbooksAPI.getCookbooks();
  return cookbooks.map(cookbook => <Nav.Link to={`/${cookbook.id}`} className="centerItem" key={cookbook.id}>{cookbook.name}</Nav.Link>)
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