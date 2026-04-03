import { useParams } from "react-router-dom";

const Welcome = () => {
    const {username} = useParams();
  return (
    <h2>Welcome, {username}</h2>
  )
}
export default Welcome;