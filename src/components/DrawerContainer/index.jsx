import './index.css'
import { useEffect, useState } from 'react';
import { useAltair } from "../../context/app.context";
import ModalContainer from "../ModalContainer/index.jsx"

function DrawerContainer() {
  const { isDrawerOpen, cleanShoppingCart, setIsDrawerOpen, setCartItemProperty, shoppingCart, removeItemFromCart, unlockBook } = useAltair();
  const [ isModalOpen, setIsModalOpen] = useState(false);
  const [total, setTotal] = useState(0);
  const [isByBook, setIsBuyBook] = useState(false);
  const freePackage = {
    name: "Paquete de Estrellas",
    price: 0,
    description: "Incluye bucket hat y llavero exclusivos, stickers y un pin.",
    photo: "start-packege.png"
  };

  function purchaseCompleted() {
    if (isByBook) {
      unlockBook();
    }
  
    cleanShoppingCart();
    setIsBuyBook(0)
    setTotal(0)
    setIsDrawerOpen(false)
    setIsModalOpen(false);

    window.location.href = '/';
  }

  useEffect(() => {
    if (shoppingCart.length >= 1) {
      const totalOnCart = shoppingCart.reduce((acc, item) => acc + item.amount * item.price, 0);
      setTotal(totalOnCart);

      const hasBook = shoppingCart.some((item) => item.pid === '00000');
      setIsBuyBook(hasBook);
    } else {
      setTotal(0);
      setIsBuyBook(false);
    }
  }, [shoppingCart])
  
  return (
    <>
      <div onClick={ () => setIsDrawerOpen(false) } data-open-layer={ String(isDrawerOpen) } >
      </div>
      <div data-open-drawer={ String(isDrawerOpen) } >
        <div className="w-full min-h-50px pt-2 flex justify-between items-center">
          <h2 className="font-planc-bold text-[#e67ea7] text-[2rem]">Tu carrito</h2>
          <img onClick={ () => setIsDrawerOpen(false) } className="w-[15px] cursor-pointer" src="/assets/close.svg" alt="Close Cart" />
        </div>
        <span className="font-planc-thin text-[1rem] w-full my-[-8px] block">
          { `${shoppingCart.length} Producto(s)` }
        </span>
        <div className="w-full mt-15 mb-5">
          {
            shoppingCart.map((item) => {

              return (
                <div key={ item.id } className="w-full px-3 flex py-1 mb-2">
                  <div className="w-[100px] h-[100px] flex-none">
                    <img src={ `/products/${item.photo}` } className="w-full" alt={ item.id } />
                  </div>
                  <div className="w-[100%] p-1 grid grid-cols-1 max-h-[60px]">
                    <div className="flex justify-between gap-3">
                      <span className="text-nowrap overflow-hidden font-planc-thin text-[1rem]">
                        { item.name }
                      </span>
                      <span className="text-nowrap overflow-hidden font-planc-thin text-[1rem] flex-none font-bold">
                        $ { item.amount * item.price } MXN
                      </span>
                    </div>
                    <div className="flex gap-1 items-center">
                      <div className="font-planc-medium text-[#e67ea7] flex w-fit rounded-full overflow-hidden border-1 border-[#e67ea7] text-[1rem] items-center">
                        <button onClick={ () => { setCartItemProperty(item.id, 'amount', item.amount - 1 ) } } className="w-[20px] h-[20px] mr-5 cursor-pointer" disabled={ item.amount <= 1 }>-</button>
                        { item.amount }
                        <button onClick={ () => { setCartItemProperty(item.id, 'amount', item.amount + 1 ) } } className="w-[20px] h-[20px] ml-5 cursor-pointer">+</button>
                      </div>
                      <span onClick={ () => removeItemFromCart(item) } className="px-1">
                        <img src="/assets/delete.svg" className="w-[15px] cursor-pointer" alt="Delete from Card" />
                      </span>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        { isByBook && 
          <>
            <div className="font-planc-thin text-[.9rem] leading-3 py-3">
              + Kit de regalo por la compra de la novela completa
            </div>
            <div className="w-full px-3 flex py-1 mb-2">
              <div className="w-[100px] h-[100px] flex-none">
                <img src={ `/products/${freePackage.photo}` } className="w-full" />
              </div>
              <div className="w-[100%] p-1 grid grid-cols-1 max-h-[80px]">
                <div className="flex justify-between gap-3">
                  <span className="text-nowrap overflow-hidden font-planc-thin text-[1rem]">
                    { freePackage.name }
                  </span>
                  <span className="text-nowrap overflow-hidden font-planc-thin text-[1rem] flex-none font-bold">
                    $ { freePackage.price } MXN
                  </span>
                </div>
                <div className="font-planc-thin text-[.9rem] leading-3">
                  { freePackage.description }
                </div>
              </div>
            </div>
          </>
        }
        <div className="w-full mb-5 mt-5">
          <div className="flex justify-between gap-3 py-1">
            <span className="text-nowrap overflow-hidden font-planc-thin text-[1rem]">
              Total
            </span>
            <span className="text-nowrap overflow-hidden font-planc-thin text-[1rem] flex-none font-bold">
              $ { total } MXN
            </span>
          </div>
          <button onClick={ () => setIsModalOpen(true) } disabled={ shoppingCart.length <= 0 } className="w-full text-nowrap font-planc px-8 py-1 rounded-full border-1 bg-[#e67ea7] text-[white] cursor-pointer">
            Tramitar pedido
          </button>
        </div>
      </div>
      <ModalContainer isOpen={ isModalOpen }>
        <div className="w-full flex flex-col items-center">
          <img className="w-full max-w-[40px] md:max-w-[60px]" src="/assets/success.svg" alt="Success" />
          <img className="w-full max-w-[280px] md:max-w-[350px] mt-4" src="/assets/buy-succes.svg" alt="Buy Success" />
          <p className="font-planc pt-5 text-center text-[1.3rem] text-[#3e3e3e] leading-5">
            Gracias por tu pedido, ya formas parte de esta constelación.
          </p>
          { isByBook &&
            <div className="w-full py-5 flex justify-center">
              <a className='border-1 border-[#e67ea7] rounded-lg cursor-pointer flex'>
                <div className='text-nowrap lg:text-[1.3rem] font-planc px-3 text-[#e67ea7] border-r-1 border-r-[#e67ea7]'>
                  Descargar novela completa (PDF)
                </div>
                <div className="w-[70px] flex-none flex justify-center items-center">
                  <img src="/assets/download.svg" className="w-full max-w-[12px]" alt="download" />
                </div>
              </a>
            </div>
          }
          <div className="w-full py-5 flex justify-center">
            <button onClick={ purchaseCompleted } className='text-nowrap lg:text-[1.3rem] font-planc px-3 md:px-8 rounded-full bg-[#e67ea7] text-[white] cursor-pointer'>
              Ir al inicio
            </button>
          </div>
        </div>
      </ModalContainer>
    </>
  )
}

export default DrawerContainer;