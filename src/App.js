import Header from './components/Header.js';
import Homepage from './homepage/Homepage.js';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      <main>
        
        <Outlet/>
      </main>
    </div>
  );
}

export default App;
