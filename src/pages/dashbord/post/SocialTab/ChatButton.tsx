import { useYourContext } from "../../../../context/MultiStepForm";

const ChatButton = () => {
    const { toggleChatOpen , IsChatOpen} = useYourContext();
  return (
<button onClick={toggleChatOpen}>
    {IsChatOpen ? (
<i className="bi bi-chat-fill clr-blue-gray"></i>
    ) : (
<i className="bi bi-chat clr-blue-gray"></i>
    )
    }
</button>
  )
}

export default ChatButton