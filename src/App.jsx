import "./App.scss";
import { RouterProvider } from "react-router-dom";
import router from "./router";
function App() {
   return (
      <div className="App">
         <div className="AppGlass">
            <RouterProvider router={router}></RouterProvider>
         </div>
      </div>
   );
}

export default App;
