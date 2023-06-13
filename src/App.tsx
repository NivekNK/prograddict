import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Legality from "./pages/Legality";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Panel from "./pages/Panel";

function App() {
    return (
        <>
            <Navbar />
            <Container>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/acerca' element={<About />} />
                    <Route path='/blogs' element={<Blogs />} />
                    <Route path='/legalidad' element={<Legality />} />
                    <Route path="/ingresar" element={<Login />}/>
                    <Route path="/registrar" element={<Register />}/>
                    <Route path="/panel" element={<Panel />}/>
                </Routes>
            </Container>
            <Footer />
        </>
    )
}

export default App;