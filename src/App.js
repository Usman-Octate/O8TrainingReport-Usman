import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./App.css";
import { AppProvider } from "./context/AppProvider";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import ProtectedRoute from "./AuthScreens/ProtectedRoute";
import "../src/components/Loader/Loader.css";

// Lazy load components
const LoginScreen = lazy(() => import("./AuthScreens/LoginScreen"));
const LoginPassword = lazy(() => import("./AuthScreens/LoginPassword"));
const Navigator = lazy(() => import("../src/Navigator/Navigator"));

function App() {
  const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: (
    //     <Suspense
    //       fallback={
    //         <div className="loader-container" style={{ height: "100vh" }}>
    //           <span className="loader"></span>
    //         </div>
    //       }
    //     >
    //       <LoginScreen />
    //     </Suspense>
    //   ),
    // },
    // {
    //   path: "/loginPassword",
    //   element: (
    //     <Suspense
    //       fallback={
    //         <div className="loader-container" style={{ height: "100vh" }}>
    //           <span className="loader"></span>
    //         </div>
    //       }
    //     >
    //       <LoginPassword />
    //     </Suspense>
    //   ),
    // },
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Suspense
            fallback={
              <div className="loader-container" style={{ height: "100vh" }}>
                <span className="loader"></span>
              </div>
            }
          >
            <Navigator />
          </Suspense>
        </ProtectedRoute>
      ),
    },
  ]);

  return (
    <Provider store={store}>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </Provider>
  );
}

export default App;
