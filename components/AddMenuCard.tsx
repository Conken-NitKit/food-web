import React, { useEffect, useState } from "react";

import Modal from "react-modal";
import EmojiPicker from "emoji-picker-react";
import { EmojiClickData, SkinTones, EmojiStyle } from "emoji-picker-react";
import { MenuContent } from "../types/MenuContent";

interface Props {
  addMenu: (newMenu: AddMenu) => void;
}

export interface AddMenu {
  product: MenuContent;
  isSold: boolean;
}

export const AddMenuCard = (): JSX.Element => {
  const IDEOGRAM_DATA: EmojiClickData = {
    activeSkinTone: SkinTones.NEUTRAL,
    unified: "",
    unifiedWithoutSkinTone: "",
    emoji: "🍔",
    names: [""],
    getImageUrl: (emojiStyle: EmojiStyle) => "",
  };

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const [menuPrice, setMenuPrice] = useState<string>("");
  const [menuIsSold, setMenuIsSold] = useState<string>("");
  const [isPrice, setIsPrice] = useState<boolean>(true);

  const [ideogramModalIsOpen, setIdeogramModalIsOpen] =
    useState<boolean>(false);
  const [IdeogramData, SetIdeogramData] =
    useState<EmojiClickData>(IDEOGRAM_DATA);

  const NEW_MENU: AddMenu = {
    product: {
      ideogram: "🍔",
      name: "",
      promotion: "",
      price: 0,
    },
    isSold: false,
  };

  const [NewMenu, SetNewMenu] = useState<AddMenu>(NEW_MENU);

  const onChangeNewMenu = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    SetNewMenu({
      product: {
        ...NewMenu.product,
        [e.target.name]: e.target.value,
      },
      isSold: NewMenu.isSold,
    });
  };

  useEffect(() => {
    SetNewMenu({
      product: {
        ...NewMenu.product,
        ideogram: IdeogramData.emoji,
      },
      isSold: NewMenu.isSold,
    });
  }, [IdeogramData.emoji]);

  useEffect(() => {
    SetNewMenu({
      product: {
        ...NewMenu.product,
      },
      isSold: menuIsSold === "soldOut" ? true : false,
    });
  }, [menuIsSold]);

  useEffect(() => {
    if (menuPrice === "") {
      setIsPrice(true);
    } else if (isNaN(Number(menuPrice))) {
      setIsPrice(true);
    } else {
      setIsPrice(false);
      SetNewMenu({
        product: {
          ...NewMenu.product,
          price: Number(menuPrice),
        },
        isSold: NewMenu.isSold,
      });
    }
  }, [menuPrice]);

  const createMenu = () => {
    if (isPrice === false) {
      /*
        import UUID from "uuidjs";
        const ID = UUID.generate();
        本番環境(データベース上)に追加されるデータ
        この関数内にデータを送信する関数をおく
        [ID]: {
          ...NewMenu,
        }
      */
      SetNewMenu({
        ...NEW_MENU,
      });
      SetIdeogramData({
        activeSkinTone: SkinTones.NEUTRAL,
        unified: "",
        unifiedWithoutSkinTone: "",
        emoji: "🍔",
        names: [""],
        getImageUrl: (emojiStyle: EmojiStyle) => "",
      });
      setMenuPrice("");
      setMenuIsSold("onSale");
      setModalIsOpen(false);
    }
  };

  const handleEmojiClick = (emojiData: EmojiClickData, event: MouseEvent) => {
    SetIdeogramData(emojiData);
    setIdeogramModalIsOpen(false);
  };

  return (
    <div>
      <div
        className="border border-primary-regular border-dashed rounded-[19px] 2xl:rounded-[23px] w-[237px] 2xl:w-[284px] h-[247px] 2xl:h-[297px]"
        onClick={() => setModalIsOpen(true)}
      >
        <div className="flex mt-[38.3%] mx-auto border-[3px] border-primary-regular rounded-full w-[26px] 2xl:w-[32px] h-[26px] 2xl:h-[32px]">
          <div className="m-auto w-[60%] h-[15%] bg-thirdly-regular before:block before:rotate-90 before:w-[100%] before:h-[100%] before:content-[''] before:bg-thirdly-regular" />
        </div>
        <p className="mx-auto mt-[6.3%] text-[16px] 2xl:text-[19px] text-secondary-regular text-center">
          メニューを追加
        </p>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, .2)",
          },
        }}
        className="relative top-[50%] left-[50%] pt-[15px] pb-[17px] pr-[20px] pl-[19px] rounded-[8px] w-[472px] h-[565px] translate-x-[-50%] translate-y-[-50%] bg-white-a100 font-menu-card outline-none"
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
                value={NewMenu.product.name}
                onChange={onChangeNewMenu}
                id="menu_name"
                className="border border-solid border-lightgray-a100 rounded box-border w-[284px] h-[31px]"
                name="name"
              />
            </div>
            <div>
              <label htmlFor="menu_price" className="block mb-[6px] font-bold">
                価格
              </label>
              <input
                type="text"
                value={menuPrice}
                onChange={(e) => setMenuPrice(e.target.value)}
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
                value={NewMenu.product.promotion}
                onChange={onChangeNewMenu}
                id="menu_description"
                className="border border-solid border-lightgray-a100 rounded box-border w-[284px] h-[215px]"
                name="promotion"
              />
            </div>
          </div>
          <div>
            <p className="mb-[5px] font-bold text-[12px]">商品イメージ</p>
            <div className="flex mb-[8px] border border-solid border-lightgray-a100 rounded box-border w-[130px] h-[130px] items-center justify-center text-[46px] font-bold bg-accent-secondary-light-regular">
              {IdeogramData.emoji}
            </div>
            <button
              className="rounded-[4px] w-[130px] h-[25px] text-[10px] bg-goldenyellow-a100 cursor-pointer"
              onClick={() => setIdeogramModalIsOpen(true)}
            >
              絵文字を選択する
            </button>
          </div>
        </div>
        <div className="absolute bottom-[17px] right-[20px] text-[10px]">
          <button
            onClick={() => setModalIsOpen(false)}
            className="mr-[9px] border border-solid border-lightgray-a100 rounded box-border w-[67px] h-[23px]"
          >
            キャンセル
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
        isOpen={ideogramModalIsOpen}
        onRequestClose={() => setIdeogramModalIsOpen(false)}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, .2)",
          },
        }}
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <EmojiPicker onEmojiClick={handleEmojiClick} />
      </Modal>
    </div>
  );
};
