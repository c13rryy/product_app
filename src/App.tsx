import { RouterProvider, createBrowserRouter } from "react-router-dom"
import RootLayout from "./pages/Root"
import Home from "./pages/Home"
import ProductsPage from "./pages/ProductsPage"
import SingleProductPage from "./pages/SingleProductPage"
import CreateProductPage from "./pages/CreateProductPage"
import { Toaster } from "react-hot-toast"
import EditProductPage from "./pages/EditProductPage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "products",
        children: [
          { index: true, element: <ProductsPage /> },
          { path: ":id", element: <SingleProductPage /> },
          {
            path: "edit",
            children: [{ path: ":id", element: <EditProductPage /> }],
          },
        ],
      },
      { path: "create", element: <CreateProductPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
])

const App = () => {
  return (
    <>
      <Toaster position="top-right" />
      <RouterProvider router={router} />
    </>
  )
}

export default App
