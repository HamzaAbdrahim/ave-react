import { useYourContext } from "../../../context/MultiStepForm";
import Comment from "./Comment";
import CommentInput from "./ui/CommentInput";

const CommentSection = () => {
  const { toggleChatOpen, IsChatOpen } = useYourContext();

  return (
    <section className={`animate__animated ${IsChatOpen ? 'animate__backInDown' :  "animate__backOutDown h-transtion" } `}>
      <hr className="post-line" />
     <CommentInput toggleChatOpen={toggleChatOpen} />
      <h1 className="fw-fw-medium fs-px_18 px-4 clr-gray-300">See ALL comments</h1>
      <hr className="post-line" />
      <Comment />
    </section>
  ) ;
};

export default CommentSection;
