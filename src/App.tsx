import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LayoutDefault from "./components/common/Layout";

function App() {
    return (
        <Router>
            <LayoutDefault>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </LayoutDefault>
        </Router>
    );
}

export default App;
