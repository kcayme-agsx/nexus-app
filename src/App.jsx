import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import MapPage from "./pages/MapPage";
import ParkingPage from "./pages/ParkingPage";
import PromosPage from "./pages/PromosPage";
import NavigationPage from "./pages/NavigationPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/parking" element={<ParkingPage />} />
        <Route path="/promos" element={<PromosPage />} />
        <Route path="/navigation" element={<NavigationPage />} />
      </Routes>
    </BrowserRouter>
  );
}
