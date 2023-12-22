import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

export default function ChatsPage(props) {
  const projectId = import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID;
  const chatProps = useMultiChatLogic(
    projectId,
    props.user.username,
    props.user.secret
  );

  return (
    <div style={{ height: "100vh" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: "100%" }} />
    </div>
  );
}
