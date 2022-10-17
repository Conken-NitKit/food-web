import React, { useState } from "react";
import Modal from "react-modal";
import EmojiPicker from "emoji-picker-react";
import { EmojiClickData, SkinTones, EmojiStyle } from "emoji-picker-react";
import { menuContent } from "../pages/menu";

interface Props {
  addMenu: (newMenu: menuContent) => void;
}

export const MenuModal = ({ addMenu }: Props): JSX.Element => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const [menuName, setMenuName] = useState<string>("");
  const [menuPrice, setMenuPrice] = useState<string>("");
  const [menuIsSold, setMenuIsSold] = useState<string>("");
  const [menuPromotion, setMenuPromotion] = useState<string>("");
  const [isPrice, setIsPrice] = useState<boolean>(false);

  const [ideogramSelect, setIdeogramSelect] = useState<boolean>(false);
  const [ideogramData, setIdeogramData] = useState<EmojiClickData>({
    activeSkinTone: SkinTones.NEUTRAL,
    unified: "",
    unifiedWithoutSkinTone: "",
    emoji: "🍔",
    names: [""],
    getImageUrl: (emojiStyle: EmojiStyle) => "",
  });

  const [newMenu, setNewMenu] = useState<menuContent>({
    a: {
      product: {
        ideogram: ideogramData.emoji,
        name: menuName,
        promotion: menuPromotion,
        price: Number(menuPrice),
      },
      isSold: menuIsSold === "soldOut" ? true : false,
    },
  });

  const createMenu = () => {
    setNewMenu({
      a: {
        product: {
          ideogram: ideogramData.emoji,
          name: menuName,
          promotion: menuPromotion,
          price: Number(menuPrice),
        },
        isSold: menuIsSold === "soldOut" ? true : false,
      },
    });
    addMenu(newMenu);
  };

  const checkPrice = (value: string) => {
    setMenuPrice(value);
    if (isNaN(Number(value))) {
      setIsPrice(true);
    } else {
      setIsPrice(false);
    }
  };

  const handleEmojiClick = (emojiData: EmojiClickData, event: MouseEvent) => {
    setIdeogramData(emojiData);
    setIdeogramSelect(false);
  };

  return (
    <>
      <button onClick={() => setModalIsOpen(true)}>modal</button>
      {/* className="absolute top-[294px] left-[532px] rounded-[8px] w-[472px] h-[565px] bg-white-a100" */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="relative top-[50%] left-[50%] pt-[15px] pb-[17px] pr-[20px] pl-[19px] rounded-[8px] w-[472px] h-[565px] translate-x-[-50%] translate-y-[-50%] bg-white-a100 font-menu-card"
      >
        <h3 className="h-[17px] font-bold text-[15px]">メニューを新規作成</h3>
        <div className="flex mt-[14px] gap-x-[19px]">
          <div className="space-y-[12px] text-[12px]">
            <div>
              <label
                htmlFor="menu_name"
                className="block mb-[3px] font-bold w-[284px]"
              >
                メニュー名
              </label>
              <input
                type="text"
                value={menuName}
                onChange={(e) => setMenuName(e.target.value)}
                id="menu_name"
                className="border border-solid border-lightgray-a100 rounded box-border w-[284px] h-[31px]"
              />
            </div>
            <div>
              <label htmlFor="menu_price" className="block mb-[6px] font-bold">
                価格
              </label>
              <input
                type="text"
                value={menuPrice}
                onChange={(e) => checkPrice(e.target.value)}
                id="menu_price"
                className="border border-solid border-lightgray-a100 rounded box-border w-[284px] h-[31px]"
              />
              {isPrice && <div>半角で数値を入力してください。</div>}
            </div>
            <div>
              <label className="block mb-[4px] font-bold">状態</label>
              <select
                className="border border-solid border-lightgray-a100 rounded box-border w-[284px] h-[31px] cursor-pointer"
                value={menuIsSold}
                onChange={(e) => setMenuIsSold(e.target.value)}
              >
                <option value="onSale">販売中</option>
                <option value="soldOut">売り切れ</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="menu_description"
                className="block mb-[4px] font-bold"
              >
                説明文
              </label>
              <textarea
                value={menuPromotion}
                onChange={(e) => setMenuPromotion(e.target.value)}
                id="menu_description"
                className="border border-solid border-lightgray-a100 rounded box-border w-[284px] h-[215px]"
              />
            </div>
          </div>
          <div>
            <p className="mb-[5px] font-bold text-[12px]">商品イメージ</p>
            <div className="flex mb-[8px] border border-solid border-lightgray-a100 rounded box-border w-[130px] h-[130px] items-center justify-center text-[46px] font-bold bg-accent-secondary-light-regular">
              {ideogramData.emoji}
            </div>
            <button
              className="rounded-[4px] w-[130px] h-[25px] text-[10px] bg-goldenyellow-a100 cursor-pointer"
              onClick={() => setIdeogramSelect(true)}
            >
              絵文字を選択する
            </button>
          </div>
        </div>
        <div className="absolute bottom-[17px] right-[20px] text-[10px]">
          <button
            onClick={createMenu}
            className="mr-[9px] border border-solid border-lightgray-a100 rounded box-border w-[67px] h-[23px]"
          >
            商品を追加
          </button>
          <button
            onClick={createMenu}
            className="rounded-[2px] w-[66px] h-[23px] bg-goldenyellow-a100"
          >
            商品を追加
          </button>
        </div>
      </Modal>
      <Modal
        isOpen={ideogramSelect}
        onRequestClose={() => setIdeogramSelect(false)}
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <EmojiPicker onEmojiClick={handleEmojiClick} />
      </Modal>
    </>
  );
};
