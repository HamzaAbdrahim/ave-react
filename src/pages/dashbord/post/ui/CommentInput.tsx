import Inputlabel from "../../../../components/commen/ui/Inputlabel"
type props = {
    toggleChatOpen:() => void
}
const CommentInput:React.FC<props> = ({toggleChatOpen}) => {
  return (
    <>
     <div className='flex-items gap-2 p-4 pb-2'>
        <div className='size-50px'>
          <img src="https://i.ibb.co/PTrBjrY/Image-40.png" className="img-fluid w-100 h-100" alt="" />
        </div>
        <div className="w-100">
          <Inputlabel name={""} type={"text"} label={"What are you thinking?"} />
        </div>
      </div>
      <div className="flex-items justify-content-end gap-2 px-4 pb-4">
        <button onClick={toggleChatOpen} className="flex-items gap-2 justify-content-center medium-blue-button outline">
          Close
          <i className="bi bi-x-circle"></i>  
        </button>
        <button className="flex-items gap-2 justify-content-center medium-blue-button">
          Post
          <i className="bi bi-send sp-letter-05"></i>
        </button>
      </div>
    </>
  )
}

export default CommentInput