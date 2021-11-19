import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import "./App.css";

import Header from "./components/Header";

import { Moon, Mars, Europa, Titan } from "./components/Destination";
import { Hurley, Shuttleworth, Glover, Ansari } from "./components/CrewMember";
import { Vehicle, Capsule, Spaceport } from "./components/Technology";

import Home from "./pages/Home";

import Destinations from "./pages/Destinations";
import Crew from "./pages/Crew";
import Technologies from "./pages/Technologies";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="destination" element={<Destinations />}>
            <Route index element={<Moon />} />
            <Route path="moon" element={<Moon />} />
            <Route path="mars" element={<Mars />} />
            <Route path="europa" element={<Europa />} />
            <Route path="titan" element={<Titan />} />
          </Route>

          <Route path="crew" element={<Crew />}>
            <Route index element={<Hurley />} />
            <Route path="hurley" element={<Hurley />} />
            <Route path="shuttleworth" element={<Shuttleworth />} />
            <Route path="glover" element={<Glover />} />
            <Route path="ansari" element={<Ansari />} />
          </Route>

          <Route path="/technology/*" element={<Technologies />}>
            <Route index element={<Vehicle />} />
            <Route path="vehicle" element={<Vehicle />} />
            <Route path="capsule" element={<Capsule />} />
            <Route path="spaceport" element={<Spaceport />} />
          </Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
