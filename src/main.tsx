import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Route/router.tsx";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import { store } from "./Redux/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
    <Toaster />
  </Provider>
);
