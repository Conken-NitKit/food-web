import type { NextPage } from "next";

import { MenuCard } from "../components/MenuCard";
import { FeatureLayout } from "../components/layouts";

const Menu: NextPage = () => {
  return (
    <div className="w-screen h-screen">
      <FeatureLayout type="menu">
        <MenuCard isSold/>
      </FeatureLayout>
    </div>
  );
};

export default Menu;
