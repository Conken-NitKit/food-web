import React, { useState } from "react";

import Modal from "react-modal";
import EmojiPicker from "emoji-picker-react";
import { EmojiClickData } from "emoji-picker-react";
import { useModalControll } from "../lib/hooks/useModalControll";

export const AddMenuCard = (): JSX.Element => {
  const modal = useModalControll(false);
  const ideogramModal = useModalControll(false);

  const [ideogram, setIdeogram] = useState<string>("🍔");
  const [name, setName] = useState<string>("");
  const [promotion, setPromotion] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [isSold, setIsSold] = useState<boolean>(false);

  const handleIdeogramClick = (emojiData: EmojiClickData) => {
    ideogramModal.close();
    setIdeogram(emojiData.emoji);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePromotionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPromotion(e.target.value);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!Number.isNaN(Number(e.target.value))) {
      setPrice(Number(e.target.value));
    }
  };

  const handleIsSoldChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsSold(e.target.value === "true");
  };

  const menuReset = () => {
    setIdeogram("🍔");
    setName("");
    setPromotion("");
    setPrice(0);
    setIsSold(false);
  };

  const createMenu = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    /*
      TODO: この関数内で本番環境(データベース上)にデータを送信する必要がある
            IDは用意する必要がある
            [ID]: {
              product: {
                ideogram: ideogram,
                name: name,
                promotion: promotion,
                price: price,
              },
              isSold: isSold,
            }Number
    */
    menuReset();
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
                  value={name}
                  onChange={handleNameChange}
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
                  value={price}
                  onChange={handlePriceChange}
                  id="menu_price"
                  className="border border-solid border-lightgray-a100 rounded box-border pl-[8px] w-[284px] h-[31px]"
                />
              </div>
              <div>
                <label className="block mb-[4px] font-bold">状態</label>
                <select
                  className="border border-solid border-lightgray-a100 rounded box-border pl-[4px] w-[284px] h-[31px] cursor-pointer"
                  value={isSold ? "true" : "false"}
                  onChange={handleIsSoldChange}
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
                  value={promotion}
                  onChange={handlePromotionChange}
                  id="menu_description"
                  className="border border-solid border-lightgray-a100 rounded box-border p-[8px] w-[284px] h-[215px]"
                />
              </div>
            </div>
            <div>
              <p className="mb-[5px] font-bold text-[12px]">商品イメージ</p>
              <div className="flex mb-[8px] border border-solid border-lightgray-a100 rounded box-border w-[130px] h-[130px] items-center justify-center text-[46px] font-bold bg-accent-secondary-light-regular">
                {ideogram}
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
