import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import News from "./pages/News";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <Layout /> },
  { path: "/home", element: <Home /> },
  { path: "news", element: <News /> },
  {path:'/contact',element:<Contact/>},
  {path:'/about', element:<About/>}
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
