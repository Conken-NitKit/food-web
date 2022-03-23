import { HomeIcon } from "./icons";

interface Props {
  chosen: string;
  isChose: boolean;
}

export const Icon = ({ chosen, isChose }: Props) => {
  switch (chosen) {
    case "home":
      return <HomeIcon isChose={isChose} />;
    case "menu":
      return <HomeIcon isChose={isChose} />;
    case "monitoring":
      return <HomeIcon isChose={isChose} />;
    case "order":
      return <HomeIcon isChose={isChose} />;
    case "sales":
      return <HomeIcon isChose={isChose} />;
    case "settings":
      return <HomeIcon isChose={isChose} />;
    case "shift":
      return <HomeIcon isChose={isChose} />;
    case "user":
      return <HomeIcon isChose={isChose} />;
  }
};
