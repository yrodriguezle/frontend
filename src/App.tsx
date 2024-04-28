
import { RouterProvider } from "react-router-dom"
import router from "./components/routes/router"

function App() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<p>Initial Load...</p>}
    />
  )
}

export default App
