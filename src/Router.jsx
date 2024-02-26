import {BrowserRouter, Route, Routes, Link} from "react-router-dom";

import GeneralInfo from "./components/GeneralInfo.jsx";
import DiseaseInfo from "./components/DiseaseInfo.jsx";
import BacteriaInfo from "./components/BacteriaInfo.jsx";

import './Router.css'
import './App.css'
function Router() {
    return (
        <>
            <BrowserRouter>
                <div className='RouterDesign'>
                    <h3>Navigate to:</h3>
                    <ul>
                        <li>
                            <Link to="/">View general plots for the project</Link>
                        </li>
                        <li>
                            <Link to="/diseaseinfo">
                                Search for a specific disease
                            </Link>
                        </li>
                        <li>
                            <Link to="/bacteriainfo">
                                Search for a specific bacteria
                            </Link>
                        </li>
                    </ul>
                </div>

                <Routes>
                        <Route
                            exact
                            path="/"
                            element={<GeneralInfo/>}
                        />
                        <Route
                            exact
                            path="/diseaseinfo"
                            element={<DiseaseInfo/>}
                        />
                        <Route
                            exact
                            path="/bacteriainfo"
                            element={<BacteriaInfo/>}
                        />
                    </Routes>
            </BrowserRouter>

        </>
)
}

export default Router