import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App.tsx";
import NewContact from "./components/NewContact.tsx";
import Contacts from "./components/Contacts.tsx";
import Edit from "./components/Edit.tsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App></App>,
      errorElement: <h1>Error! Page not found... sorry</h1>,
      children: [
        { path: "", element: <Contacts /> },
        { path: "/newContact", element: <NewContact /> },
        { path: "/Edit/:itemID", element: <Edit /> },
      ],
    },
  ],
  { basename: "/ContactManager" }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
