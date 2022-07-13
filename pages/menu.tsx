import type { NextPage } from "next";

import { MenuCard } from "../components"
import { FeatureLayout } from "../components/layouts";

const Menu: NextPage = () => {
  return (
    <FeatureLayout type="menu">
      <div className="flex">
        <MenuCard isSold />
      </div>
    </FeatureLayout>
  );
};

export default Menu;
