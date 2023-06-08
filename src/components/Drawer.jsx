const Drawer = ({onCloseCart,items=[]}) => {
  return (
    <div className="overlay">
    <div className="drawer">
      <h2 className=" d-flex justify-between mb-30 ">
        Корзина{" "}
        <img onClick={onCloseCart} className="removeBtn" src="/img/btn-remove.svg" alt="Close" />
      </h2>

      <div className="items">
      {items.map((obj) => (
                <div key={obj.id} className="cartItem d-flex align-center mb-20">
                
                 <img   width={70} height={70} src={obj.imageUrl} className="cartItemImg mr-10"  alt="Image" />
          

                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                   
                    className="removeBtn"
                    src="img/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
      </div>
      <div className="cartTotalBlock">
        <ul>
          <li>
            <span>Итого:</span>
            <div></div>
            <b>21 498 руб.</b>
          </li>
          <li>
            <span>Налог 5%:</span>
            <div></div>
            <b>1074 руб.</b>
          </li>
        </ul>
        <button className="greenButton">
          Оформить Заказ
          <img src="/img/arrow.svg" alt="Arrow" />
        </button>
      </div>
    </div>
    </div>
  );
}

export default Drawer

