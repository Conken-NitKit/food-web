import type { NextPage } from "next";

import { MenuCard } from "../components/MenuCard";
import { FeatureLayout } from "../components/layouts";

const Menu: NextPage = () => {
  return (
      <FeatureLayout type="menu">
        <MenuCard isSold/>
      </FeatureLayout>
  );
};

export default Menu;
