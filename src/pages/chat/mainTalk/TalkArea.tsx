import SandInput from "./SandInput"
import  masg_user_img from "../../../assets/masg-user-img.png";
import MessageResponse from "./MessageResponse";
import MessageSent from "./MessageSent";


const TalkArea = () => {
    const messageResponseData = {
        userImage: masg_user_img,
        messageText: "Hey! I would like to know what do you want to fix?",
        messageTime: "13:01",
      };
      const messageSentData = {
        userImage: masg_user_img,
        messageText:
          "hello! Thanks for reaching out so there are many problems of Lorem ipsum so i was looking for someone to help",
        messageTime: "13:01",
        seenTime: "13:05",
      };
  return (
    <>
       <div>
        <MessageResponse {...messageResponseData} />
        <MessageSent {...messageSentData}  />
        <MessageResponse {...messageResponseData} />
        <MessageSent {...messageSentData}  />
        <MessageResponse {...messageResponseData} />
        <MessageSent {...messageSentData}  />
      </div>
      <SandInput />
      </>
  )
}

export default TalkArea