import "./Sidebar.css";
import Filter from "./filter";
import Roadmap from "./Roadmap";

export default function Sidebar({data}) {
  return (
    <>
      <div className="Sidebar">
        <div className="header">
          <h3>Frontend Mentor</h3>
          <p>Feedback Board</p>
        </div>
        <Filter data = {data} />
        <Roadmap />
      </div>
    </>
  );
}
