import React from "react";
import CustomCategoryButton from "../components/custom/CustomCategoryButton";
import CardList from "../components/cards/CardList";
import CardStat from "../components/cards/CardStat";

const HomePage = () => {
  return (
    <div className="base-page">
      <h1>HOME</h1>
      <br />
      {/* STATS */}
      <p>Stats</p>
      <div className="flex gap-3 mt-2">
        <CardStat name={"Lists"} />
        <CardStat name={"Items"} />
      </div>
      <br />
      {/* CATEGORY */}
      <CustomCategoryButton />
      <br />
      {/* FAVORI */}
      <p>Favori</p>
      <CardList />
      <CardList />
      <CardList />
      <br />
      <br />
      <br />
      {/* ACTIONS MENU */}
      <p>menu par dessus ?</p>
      <p className="font-bold">Mes listes - Création rapide</p>
    </div>
  );
};

export default HomePage;
