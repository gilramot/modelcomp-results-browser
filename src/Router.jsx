import {BrowserRouter, Route, Routes, Link} from "react-router-dom";

import GeneralInfo from "./components/GeneralInfo.jsx";
import DiseaseInfo from "./components/DiseaseInfo.jsx";
import BacteriaInfo from "./components/BacteriaInfo.jsx";

import './Router.css'
function Router() {
    return (
        <>
            <div className='RouterDesign'>
            <BrowserRouter>
                <ul>
                            <li>
                                <Link to="/">General Plots</Link>
                            </li>
                            <li>
                                <Link to="/diseaseinfo">
                                    Disease Info
                                </Link>
                            </li>
                            <li>
                                <Link to="/bacteriainfo">
                                    Bacteria Info
                                </Link>
                            </li>
                </ul>
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
            </div>
        </>
    )
}

export default Router