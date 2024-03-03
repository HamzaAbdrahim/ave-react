import Navbar from "../pages/dashbord/navbar/Navbar"
import "../pages/chat/chat.css";
import UsersMessages from "../pages/chat/userMessages/UsersMessages";
import TalkArea from "../pages/chat/mainTalk/TalkArea";
import AdditionalInfo from "../pages/chat/mainTalk/AdditionalInfo";



const MessagesLayout = () => {
  return (
    <>
    <Navbar />
    <div className="main-page d-flex justify-content-center">
      <div className="row container-lg">
          <div className="pt-4 col-md-3 px-0 px-sm-2 order-2 order-md-1">
            <UsersMessages />
          </div>
          <div className="pt-4 col-md-6 order-3 order-md-2 px-sm-4 border-left-right
           position-relative">
            <TalkArea />
          </div>
          <div className="pt-4 col-md-3 order-1 order-md-3">
            <AdditionalInfo />
            </div>
          </div>
  </div>
    </>
  )
}

export default MessagesLayout


