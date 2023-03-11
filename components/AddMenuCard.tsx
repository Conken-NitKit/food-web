import React, { useState } from "react";

import Modal from "react-modal";
import EmojiPicker from "emoji-picker-react";
import { EmojiClickData } from "emoji-picker-react";
import { useModalControll } from "../lib/hooks/useModalControll";

export const AddMenuCard = (): JSX.Element => {
  const modal = useModalControll(false);
  const ideogramModal = useModalControll(false);

  const [newIdeogram, setNewIdeogram] = useState<string>("🍔");
  const [newName, setNewName] = useState<string>("");
  const [newPromotion, setNewPromotion] = useState<string>("");
  const [newPrice, setNewPrice] = useState<number>(0);
  const [newIsSold, setNewIsSold] = useState<boolean>(false);

  const handleIdeogramClick = (emojiData: EmojiClickData) => {
    ideogramModal.close();
    setNewIdeogram(emojiData.emoji);
  };

  const handleNewNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  const handleNewPromotionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNewPromotion(e.target.value);
  };

  const handleNewPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!Number.isNaN(Number(e.target.value))) {
      setNewPrice(Number(e.target.value));
    }
  };

  const handleNewIsSoldChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNewIsSold(e.target.value === "true");
  };

  const newMenuReset = () => {
    setNewIdeogram("🍔");
    setNewName("");
    setNewPromotion("");
    setNewPrice(0);
    setNewIsSold(false);
  };

  const createMenu = () => {
    /*
      TODO: この関数内で本番環境(データベース上)にデータを送信する必要がある
            IDは用意する必要がある
            [ID]: {
              product: {
                ideogram: newIdeogram,
                name: newName,
                promotion: newPromotion,
                price: newPrice,
              },
              isSold: newIsSold,
            }Number
    */
    newMenuReset();
    modal.close();
  };

  return (
    <div>
      <div
        className="border border-primary-regular border-dashed rounded-[19px] 2xl:rounded-[23px] w-[237px] 2xl:w-[284px] h-[247px] 2xl:h-[297px]"
        onClick={modal.open}
      >
        <div className="flex mt-[38.3%] mx-auto border-[3px] border-primary-regular rounded-full w-[26px] 2xl:w-[32px] h-[26px] 2xl:h-[32px]">
          <div className="m-auto w-[60%] h-[15%] bg-thirdly-regular before:block before:rotate-90 before:w-[100%] before:h-[100%] before:content-[''] before:bg-thirdly-regular" />
        </div>
        <p className="mx-auto mt-[6.3%] text-[16px] 2xl:text-[19px] text-secondary-regular text-center">
          メニューを追加
        </p>
      </div>
      <Modal
        isOpen={modal.isOpen}
        onRequestClose={modal.close}
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
        className="relative top-[50%] left-[50%] pt-[15px] pb-[17px] pr-[20px] pl-[19px] rounded-[8px] w-[472px] h-[565px] translate-x-[-50%] translate-y-[-50%] bg-white-a100 font-menu-card outline-none text-brown-a100"
      >
        <h3 className="h-[17px] font-bold text-[15px]">メニューを新規作成</h3>
        <form onSubmit={createMenu}>
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
                  value={newName}
                  onChange={handleNewNameChange}
                  id="menu_name"
                  className="border border-solid border-lightgray-a100 rounded box-border pl-[8px] w-[284px] h-[31px]"
                />
              </div>
              <div>
                <label
                  htmlFor="menu_price"
                  className="block mb-[6px] font-bold"
                >
                  価格
                </label>
                <input
                  type="text"
                  value={newPrice}
                  onChange={handleNewPriceChange}
                  id="menu_price"
                  className="border border-solid border-lightgray-a100 rounded box-border pl-[8px] w-[284px] h-[31px]"
                />
              </div>
              <div>
                <label className="block mb-[4px] font-bold">状態</label>
                <select
                  className="border border-solid border-lightgray-a100 rounded box-border pl-[4px] w-[284px] h-[31px] cursor-pointer"
                  value={newIsSold ? "true" : "false"}
                  onChange={handleNewIsSoldChange}
                >
                  <option value="false">販売中</option>
                  <option value="true">売り切れ</option>
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
                  value={newPromotion}
                  onChange={handleNewPromotionChange}
                  id="menu_description"
                  className="border border-solid border-lightgray-a100 rounded box-border p-[8px] w-[284px] h-[215px]"
                />
              </div>
            </div>
            <div>
              <p className="mb-[5px] font-bold text-[12px]">商品イメージ</p>
              <div className="flex mb-[8px] border border-solid border-lightgray-a100 rounded box-border w-[130px] h-[130px] items-center justify-center text-[46px] font-bold bg-accent-secondary-light-regular">
                {newIdeogram}
              </div>
              <button
                type="button"
                className="rounded-[4px] w-[130px] h-[25px] text-[10px] bg-goldenyellow-a100 cursor-pointer text-[#000000]"
                onClick={ideogramModal.open}
              >
                絵文字を選択する
              </button>
            </div>
          </div>
          <div className="absolute bottom-[17px] right-[20px] text-[10px]">
            <button
              type="button"
              onClick={modal.close}
              className="mr-[9px] border border-solid border-lightgray-a100 rounded box-border w-[67px] h-[23px]"
            >
              キャンセル
            </button>
            <input
              type="submit"
              value="商品を追加"
              className="rounded-[2px] w-[66px] h-[23px] bg-goldenyellow-a100 cursor-pointer"
            />
          </div>
        </form>
      </Modal>
      <Modal
        isOpen={ideogramModal.isOpen}
        onRequestClose={ideogramModal.close}
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
        <EmojiPicker onEmojiClick={handleIdeogramClick} />
      </Modal>
    </div>
  );
};
