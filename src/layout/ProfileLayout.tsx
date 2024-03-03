import Navbar from "../pages/dashbord/navbar/Navbar"
import ProfileCard from "../components/commen/cards/profileCard/ProfileCard"
import UserAbout from "../pages/profile/about/UserAbout"
import HeaderBackground from "../pages/profile/headerbackground/HeaderBackground"
import ProfileLoction from "../pages/profile/userLoction/ProfileLoction"
import { useState, useEffect } from "react"
import { getUser } from "../service/apiService"
import { ProfileCardProps } from "../types/Types"
import Lodingpage from "../components/commen/pages/loding/Lodingpage"

const ProfileLayout = () => {
  const [user, setUser] = useState<ProfileCardProps[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUser();
        setUser(userData.map((user) => {
          return user
        }));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Lodingpage />;
  }

  if (!user) {
    return <div>No user data available.</div>;
  }
  console.log(user[0].category);
  
  return (
    <>
    <Navbar />
    <HeaderBackground />
    <div className="main-page d-flex justify-content-center py-4">
      <div className="row gap-4 gap-md-0 container-lg">
          <div className="col-md-5 col-lg-4 min_top">
            <ProfileCard user_img={user[0].user_img} name={user[0].name} rating={user[0].rating} 
            category={user[0].category} location={user[0].location} 
            city={user[0].city} memberSince={user[0].memberSince} avgResponseTime={user[0].avgResponseTime} 
            presentation={user[0].presentation} 
            demandesRepondues={user[0].demandesRepondues} certifications={user[0].certifications}  />
            <ProfileLoction />
          </div>
          <div className="col-md-7 col-lg-8">
            <UserAbout presentation={user[0].presentation} 
            demandesRepondues={user[0].demandesRepondues} certifications={user[0].certifications}  />
          </div>
      </div>
  </div>
    </>
  )
}

export default ProfileLayout