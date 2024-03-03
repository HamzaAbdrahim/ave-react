import { Link } from "react-router-dom"

const ReaplayContent = () => {
  return (
    <>
<div className="p-4 rounded-5 col-10 ml-auto" style={{backgroundColor:"#f6f8fa",
marginRight:'2rem'}}>
    <div className="flex-items gap-2 mb-2">
    <img src="https://i.ibb.co/PTrBjrY/Image-40.png" className="size-50px" alt="" />
    <div className="">
    <h3 className="fw-semibold fs-px_18 ln-ht-20px">HaMza</h3>
    <span className="user-loction">City, Country</span>
    </div>
    </div>
    <p className="mb-1 clr-gray-300 fs-px_12 fw-normal ln-ht-17px">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
     consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
</div> 
<div className="flex-items col-11 ml-auto flex-wrap justify-content-between gap-1 px-4 py-3">
    <div className="flex-items gap-4">
        <Link to={""} className="flex-items gap-2 fs-px_16 fw-medium ln-ht-20px">
        <i className="bi bi-calendar2-event"></i>
        27/02/2014
        </Link>
        <Link to={""} className="flex-items gap-2 fs-px_16 fw-medium ln-ht-20px">
        <i className="bi bi-heart-fill"></i>
        13
        </Link>
    </div>
    <div className="flex-items gap-1">
        <button className="fs-px_16 clr-blue-gray fw-medium hover__underline">Like</button>
        <button className="fs-px_16 clr-blue-gray fw-medium hover__underline">Reply</button>
    </div>
</div>
    </>
  )
}

export default ReaplayContent