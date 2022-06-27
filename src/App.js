import { BrowserRouter as Router } from 'react-router-dom';
import PublicRoute from './route/PublicRoute';
import Header from "./component/Header"
import Footer from "./component/Footer"

import './assets/css/style.css'
function App() {

  return (
    <div >
        <Router>
        <Header/>
        <PublicRoute/>
        <Footer/>
        </Router>
    </div>
  );
}

export default App;
