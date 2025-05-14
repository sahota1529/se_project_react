import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection.jsx";
import "./Profile.css";
import avatar from "../../images/avatar.svg";

function Profile({
  onCardClick,
  clothingItems,
  onAddGarment,
  onEditProfile,
  setIsLoggedIn,
  handleLogout,
  onCardLike,
}) {
  // console.log(clothingItems);
  return (
    <div className="profile">
      <section className="profile__sidebar">
        <SideBar
          onEditProfile={onEditProfile}
          setIsLoggedIn={setIsLoggedIn}
          handleLogout={handleLogout}
        />
      </section>
      <section className="profile__clothing-items">
        <ClothesSection
          onCardClick={onCardClick}
          clothingItems={clothingItems}
          onAddGarment={onAddGarment}
          onCardLike={onCardLike}
        />
      </section>
    </div>
  );
}

export default Profile;
