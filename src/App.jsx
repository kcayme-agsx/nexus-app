import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import MapPage from "./pages/MapPage";
import ParkingPage from "./pages/ParkingPage";
import PromosPage from "./pages/PromosPage";
import NavigationPage from "./pages/NavigationPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ProfilePage from "./pages/ProfilePage";
import TicketsPage from "./pages/TicketsPage";
import AppSettingsPage from "./pages/AppSettingsPage";
import LinkSmacPage from "./pages/LinkSmacPage";
import SmacPointsPage from "./pages/SmacPointsPage";
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/parking" element={<ParkingPage />} />
        <Route path="/promos" element={<PromosPage />} />
        <Route path="/tickets" element={<TicketsPage />} />
        <Route path="/navigation" element={<NavigationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<AppSettingsPage />} />
        <Route path="/link-smac" element={<LinkSmacPage />} />
        <Route path="/smac-points" element={<SmacPointsPage />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
  );
}
