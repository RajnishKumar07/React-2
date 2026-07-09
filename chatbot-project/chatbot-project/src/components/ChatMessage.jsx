import robotImage from "../assets/robot.png";
import userImage from "../assets/user.png";
import loaderImage from "../assets/loading-spinner.gif";
import './ChatMessage.css'
export default function ChatMessage(props) {
  const { message, sender, isMessageLoading } = props;
  return (
    <div
      className={
        sender === "robot"
          ? "message-container robot-message"
          : "message-container user-message"
      }
    >
      {sender === "robot" && <img src={robotImage} alt="robot" width="50" />}

      {isMessageLoading ? (
        <img src={loaderImage} alt="spinner" width="50" />
      ) : (
        <div className="message">{message}</div>
      )}
      {sender === "user" && <img src={userImage} alt="user" width="50" />}
    </div>
  );
}
