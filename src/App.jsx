import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

function App() {
  const appRounter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        }
      ],
    },
  ]);

  return (
    <Provider store={appStore}>
      <div>
        <Head />
        <RouterProvider router={appRounter} />
      </div>
    </Provider>
  );
}

export default App;
