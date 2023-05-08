import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main";
import TodoPage from "../pages/todo";
import Layout from "../components/Layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/todo/:todoId",
        element: <TodoPage />,
      },
    ],
  },
], {
  basename: process.env.PUBLIC_URL
});
export default router;
