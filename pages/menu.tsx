import { MenuCard } from "../components/layouts";

const Menu: NextPage = () => {
  return (
    <div className="w-screen h-screen">
      <FeatureLayout type="menu">
        <MenuCard />
      </FeatureLayout>
    </div>
  );
};

export default Menu;
