import Navbar from "../pages/dashbord/navbar/Navbar"
import DemandeUserPost from "../pages/deatailsDemande/UserPost/DemandeUserPost"
import OffreursCards from "../pages/deatailsDemande/offreursCards/OffreursCards"
import ProfileCard from "../components/commen/cards/profileCard/ProfileCard"

const DetailsDemandeLayout = () => {
  return (
    <>
    <Navbar />
    <div className="main-page d-flex justify-content-center py-4">
      <div className="row gap-4 gap-md-0 container-lg">
          <div className="col-md-7 col-lg-8">
          <DemandeUserPost />
          <OffreursCards />
          </div>
          <div className="col-md-5 col-lg-4">
            <ProfileCard user_img={""} name={""} rating={""} category={""} location={""}
             city={""} memberSince={""} avgResponseTime={""} presentation={""}
              demandesRepondues={[]} certifications={[]} />
          </div>
      </div>
  </div>
    </>
  )
}

export default DetailsDemandeLayout