import {useState} from "react";
import { Routes, Route } from "react-router-dom";
import Container from "./components/Container";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import OurServices from "./pages/OurServices";
import Profile from "./pages/Profile";
import ClassBased from "./pages/ClassBased";
import "./App.css"
const App = () => {
  const [message, setmessage] = useState("this is a message");
  return (
    <>
      {/* <h1>{message}</h1> */}
      {/* <ClassBased/> */}
      <Routes>
        <Route
          path='/'
          element={
            <Container>
              <Home />
            </Container>
          }
        />
        <Route
          path='/class'
          element={
            <Container>
              <ClassBased />
            </Container>
          }
        />
        <Route
          path='/about-me'
          element={
            <Container>
              <AboutMe />
            </Container>
          }
        />
        <Route
          path='/our-services'
          element={
            <Container>
              <OurServices />
            </Container>
          }
        />
        <Route
          path='/profile'
          element={
            <Container>
              <Profile />
            </Container>
          }
        />
      </Routes>
    </>
  );
};

export default App;
