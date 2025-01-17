import CreateFeedback from "@/components/create/create";
import Header from "@/components/header/header";
import Login from "@/components/login/login";
import Sidebar from "@/components/sidebar/Sidebar";
import { AdvancedFetch } from "@/utils/advancedfetch";

export default function Layout({ children }) {
    return (
      <>
       <div className="container">
        <Sidebar/>
        <div className="rightContainer">
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
