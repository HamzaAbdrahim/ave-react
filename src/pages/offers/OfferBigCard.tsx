import { useState, useEffect } from "react";
import { getAllUserOfferCard } from "../../service/apiService";
import Filter from "./filter/Filter";
import UserOfferCard from "./userOffercard/UserOfferCard";
import { UserOfferCardTypes } from "../../types/Types";
import LoderUserOfferCard from "../../components/commen/sklitionsLoders/UserOfferCardLoder";

const OfferBigCard = () => {
  const [userOfferCards, setUserOfferCards] = useState<UserOfferCardTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUserOfferCards = async () => {
      try {
        const userOfferCardData = await getAllUserOfferCard();
        setUserOfferCards(userOfferCardData);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching user offer cards:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserOfferCards();
  }, []);

  
  return (
    <div className="big__box">
      <h2 className="title mb-4">Contacter des offreurs</h2>
      <div className="col-md-12 col-lg-10 mx-auto">
        <Filter />
      </div>
      {!loading ? (
        userOfferCards.map((user) => (
          <UserOfferCard
            key={user.title} 
            title={user.title}
            description={user.description}
            users={user.users}
          />
        ))
      ) : (
        <LoderUserOfferCard />
      )}
    </div>
  );
};

export default OfferBigCard;
