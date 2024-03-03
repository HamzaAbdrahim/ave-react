import { FC } from 'react';

interface MessageSentProps {
  userImage: string;
  messageText: string;
  messageTime: string;
  seenTime: string;
}

const MessageSent: FC<MessageSentProps> = ({ userImage, messageText, messageTime, seenTime }) => {
  return (
    <div className="msg-sand justify-content-end mb-4 text-end w-100 d-flex gap-3 align-self-end">
      <div className="sand_msg-box">
        <p className="msg">{messageText}</p>
        <div className="flex-items justify-content-between">
          <p className="dataSand__msg">{messageTime}</p>
          <p className="timeMsg__sand">{`Seen ${seenTime}`}</p>
        </div>
      </div>
      <img src={userImage} className="verySmall_img align-self-end" alt="" />
    </div>
  );
};

export default MessageSent;
