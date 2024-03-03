import { FC } from 'react';

interface MessageResponseProps {
  userImage: string;
  messageText: string;
  messageTime: string;
}

const MessageResponse: FC<MessageResponseProps> = ({ userImage, messageText, messageTime }) => {
  return (
    <div className="msg-respons mb-4 d-flex gap-3">
      <img src={userImage} className="verySmall_img align-self-end" alt="" />
      <div className="msg-box">
        <p className="msg">{messageText}</p>
        <p className="dataSand__msg">{messageTime}</p>
      </div>
    </div>
  );
};

export default MessageResponse;
