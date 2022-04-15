import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Create from "./components/Create/Create";
import Home from "./components/Home/Home";
import View from "./components/View/View";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/view/:id" element={<View />} />
            </Routes>
        </BrowserRouter>
    )
}