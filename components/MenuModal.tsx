import { useState } from "react";
import Modal from "react-modal";
import EmojiPicker from "emoji-picker-react";
import { EmojiClickData, SkinTones, EmojiStyle } from "emoji-picker-react";

export const MenuModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const [menuName, setMenuName] = useState<string>("");
  const [menuPrice, setMenuPrice] = useState<string>("");
  const [menuStatus, setMenuStatus] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isPrice, setIsPrice] = useState<boolean>(false);

  const [emojiSelect, setEmojiSelect] = useState<boolean>(false);
  const [emojiData, setEmojiData] = useState<EmojiClickData>({
    activeSkinTone: SkinTones.NEUTRAL,
    unified: "",
    unifiedWithoutSkinTone: "",
    emoji: "🍔",
    names: [""],
    getImageUrl: (emojiStyle: EmojiStyle) => "",
  });

  const createMenu = () => {};

  const checkPrice = (value: string) => {
    setMenuPrice(value);
    if (isNaN(Number(value))) {
      setIsPrice(true);
    } else {
      setIsPrice(false);
    }
  };

  const handleEmojiClick = (emojiData: EmojiClickData, event: MouseEvent) => {
    setEmojiData(emojiData);
    setEmojiSelect(false);
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
                value={menuStatus}
                onChange={(e) => setMenuStatus(e.target.value)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id="menu_description"
                className="border border-solid border-lightgray-a100 rounded box-border w-[284px] h-[215px]"
              />
            </div>
          </div>
          <div>
            <p className="mb-[5px] font-bold text-[12px]">商品イメージ</p>
            <div className="flex mb-[8px] border border-solid border-lightgray-a100 rounded box-border w-[130px] h-[130px] items-center justify-center text-[46px] font-bold bg-accent-secondary-light-regular">
              {emojiData.emoji}
            </div>
            <button
              className="rounded-[4px] w-[130px] h-[25px] text-[10px] bg-goldenyellow-a100 cursor-pointer"
              onClick={() => setEmojiSelect(true)}
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
        isOpen={emojiSelect}
        onRequestClose={() => setEmojiSelect(false)}
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <EmojiPicker onEmojiClick={handleEmojiClick} />
      </Modal>
    </>
  );
};
