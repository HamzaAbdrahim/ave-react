import { Link } from "react-router-dom"
import LikeButton from "./LikeButton"
import ChatButton from "./ChatButton"

type prop = {
    postDescription:string
}
const SocialTab = ({postDescription}:prop) => {
  return (
    <div className="p-4">
        <p className="post-discrption">{postDescription}</p>
        <hr className="post-line" />
        <div className='flex-items flex-column-reverse justify-content-center flex-sm-row justify-content-sm-between gap-3'>
          <Link to='/DetailsDemand' className='Demande-publique-button px-1 flex-items gap-2'>
          <i className="bi bi-globe-asia-australia"></i>
          Demande publique
          </Link>
        <div className="flex-items gap-3 ">
          <LikeButton />
          <button className="position-relative user__icon">
          <i className="bi bi-people clr-blue-gray"></i>
          <span className="tool_tip_people">Recommender</span>
          </button>
          <ChatButton />
        </div>
        </div>
      </div>
  )
}

export default SocialTab