import "./styles.css";

import { Route, Routes } from "react-router-dom";

import MainLayout from "./Components/MainLayout";
import Home from "./Pages/Home";
import PagesLayout from "./Components/PagesLayout";
import Installation from "./Pages/Installation";
import AlertPage from "./Pages/AlertPage";
import AvatarPage from "./Pages/AvatarPage";
import BadgePage from "./Pages/BadgePage";
import ButtonPage from "./Pages/ButtonPage";
import CardPage from "./Pages/CardPage";
import HeadingPage from "./Pages/HeadingPage";
import ImagePage from "./Pages/ImagePage";
import TextPage from "./Pages/TextPage";
import ErrorPage from "./Pages/ErrorPage";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/installation" element={<PagesLayout />}>
            <Route index element={<Installation />} />
            <Route path="alert" element={<AlertPage />} />
            <Route path="avatar" element={<AvatarPage />} />
            <Route path="badge" element={<BadgePage />} />
            <Route path="button" element={<ButtonPage />} />
            <Route path="card" element={<CardPage />} />
            <Route path="headings" element={<HeadingPage />} />
            <Route path="image" element={<ImagePage />} />
            <Route path="text" element={<TextPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}
