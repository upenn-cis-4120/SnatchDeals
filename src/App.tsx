import { useRef} from "react";
import "./App.css";
import NavBar from "./nav/NavBar";
import Home from "./pages/Home";
import { Box, CssBaseline} from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DealPage from "./pages/DealPage";
import CategoryPage from "./pages/CategoryPage";
import CategoriesPage from "./pages/CategoriesPage";

const App: React.FC<any> = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <BrowserRouter>
      <Box
        sx={{ width: "100vw", maxWidth: "50vh", minHeight: "500px"}}
        ref={ref}
      >
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deals/:key" element={<DealPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/*" element={<CategoryPage />} />
          <Route path="*" element={<p>Not found!</p>} />
        </Routes>
        <NavBar />
      </Box>
    </BrowserRouter>
  );
};

export default App;
