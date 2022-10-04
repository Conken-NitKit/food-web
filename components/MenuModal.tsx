import { useState } from "react";
import Modal from "react-modal";

export const MenuModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const [menuName, setMenuName] = useState<string>("");
  const [menuPrice, setMenuPrice] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const CreateMenu = () => {};

  return (
    <>
      <button onClick={() => setModalIsOpen(true)}>modal</button>
      {/* className="absolute top-[294px] left-[532px] rounded-[8px] w-[472px] h-[565px] bg-white-a100" */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="absolute top-[29px] left-[53px] pt-[15px] pb-[17px] pr-[20px] pl-[19px] rounded-[8px] w-[472px] h-[565px] bg-white-a100 font-menu-card"
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
                type="number"
                value={menuPrice}
                onChange={(e) => setMenuPrice(e.target.value)}
                id="menu_price"
                className="border border-solid border-lightgray-a100 rounded box-border w-[284px] h-[31px]"
              />
            </div>
            <div>
              <label className="block mb-[4px] font-bold">状態</label>
              <select className="border border-solid border-lightgray-a100 rounded box-border w-[284px] h-[31px]">
                <option>販売中</option>
                <option>売り切れ</option>
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
            <div className="mb-[8px] border border-solid border-lightgray-a100 rounded box-border w-[130px] h-[130px]">
              🍔
            </div>
            <div>
              <label className="w-[130px] h-[25px] text-[10px]">
                絵文字を選択する
              </label>
              <select>
                <option>🍔</option>
                <option>🍟</option>
                <option>🍿</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-end text-[10px]">
          <button
            onClick={CreateMenu}
            className="mr-[9px] border border-solid border-lightgray-a100 rounded box-border w-[67px] h-[23px]"
          >
            商品を追加
          </button>
          <button onClick={CreateMenu} className="w-[66px] h-[23px]">
            商品を追加
          </button>
        </div>
      </Modal>
    </>
  );
};
