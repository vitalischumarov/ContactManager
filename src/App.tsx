import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.scss";
import Main from "./components/Main";
import AllContactsView from "./components/AllContactsView";
import EditView from "./components/EditView";
import NewContact from "./components/NewContact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <h1>404 Error</h1>,
    children: [
      {
        path: "/allContactsView",
        element: <AllContactsView></AllContactsView>,
      },
      {
        path: "/editView",
        element: <EditView></EditView>,
      },
      {
        path: "/newContact",
        element: <NewContact></NewContact>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
