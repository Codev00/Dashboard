import "./home.scss";
import { Sidebar, MainDash } from "../../components";
function Home() {
   return (
      <div className="home">
         <Sidebar />
         <MainDash />
      </div>
   );
}

export default Home;
