import Blogs from "../pages/Blogs";
import BlogDetailed from "../pages/Blogs/BlogDetailed";
import { Route, Routes } from "react-router-dom";

export const WebRoutes = () => {
  const routes = [
    { path: "/", element: <Blogs /> },
    { path: "/blog/:slug", element: <BlogDetailed /> },
  ];

  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};
