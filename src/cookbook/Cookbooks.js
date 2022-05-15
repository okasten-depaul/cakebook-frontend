import { Outlet } from 'react-router-dom';
import * as cookbooksAPI from "../api/cookbook";


const createCookbooksList = () => {
  const cookbooks = cookbooksAPI.getCookbooks();
  return cookbooks.map(cookbook => <a href={`${cookbook.id}`} className="centerItem" key={cookbook.id}>{cookbook.name}</a>)
}

function indexPage() {
  return(
    <div className="centerContainer cookbookIndex">
      <h1 className="title">My Cookbooks</h1>
      {createCookbooksList()}
    </div>
  )
}

function Cookbooks() {
  const isIndex = window.location.pathname === "/cookbooks";

  return (
    <div>
      {isIndex ? indexPage() : <Outlet/>}
    </div>
    
  )
}

export default Cookbooks;