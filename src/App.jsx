import 'styles/styles.css';
import Index                                            from 'pages';
import Agronomia                                        from 'pages/agronomia';
import Abonos                                           from 'pages/abonos';
import Login                                            from 'pages/login';
import Register                                         from 'pages/register';
import {BrowserRouter as Router, Routes, Route}         from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route exact path='/agronomia'      element={<Agronomia/>}/>
                <Route exact path='/abonos'         element={<Abonos/>}/>
                <Route exact path='/register'       element={<Register/>}/>
                <Route exact path='/login'          element={<Login/>}/>
                <Route exact path='/'               element={<Index/>}/>
            </Routes>
        </Router>
    </div>
  );
}
export default App;

