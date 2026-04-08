import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Welcome = () => {
    const {username} = useParams();
  return (
    <>
      <h2>Welcome, {username}</h2>
      <div>Manage your todos <Link to="/todos">here</Link></div>
    </>
  );
}
export default Welcome;