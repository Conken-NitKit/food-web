interface Props {
  chosen: string;
  isChose: boolean;
}

export const Icon = ({ chosen, isChose }: Props) => {
  switch (chosen) {
    case "home":
      return;
    case "menu":
      return;
    case "monitoring":
      return;
    case "order":
      return;
    case "sales":
      return;
    case "settings":
      return;
    case "shift":
      return;
    case "user":
      return;
  }
};
