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
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <div>
          <h3>メニューを新規作成</h3>
          <div>
            <input
              type="text"
              value={menuName}
              onChange={(e) => setMenuName(e.target.value)}
              id="menu_name"
            />
            <label htmlFor="menu_name">メニュー名</label>
          </div>
          <div>
            <input
              type="number"
              value={menuPrice}
              onChange={(e) => setMenuPrice(e.target.value)}
              id="menu_price"
            />
            <label htmlFor="menu_price">価格</label>
          </div>
          <div>
            <label>状態</label>
            <select>
              <option>販売中</option>
              <option>売り切れ</option>
            </select>
          </div>
          <div>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="menu_description"
            />
            <label htmlFor="menu_description">説明文</label>
          </div>
        </div>
        <div>
          <p>商品イメージ</p>
          <div>🍔</div>
          <div>
            <label>絵文字を選択する</label>
            <select>
              <option>🍔</option>
              <option>🍟</option>
              <option>🍿</option>
            </select>
          </div>
        </div>
        <div>
          <button onClick={CreateMenu}>商品を追加</button>
          <button onClick={CreateMenu}>商品を追加</button>
        </div>
      </Modal>
    </>
  );
};
