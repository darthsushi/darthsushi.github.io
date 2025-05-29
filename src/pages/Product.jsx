import { useParams, NavLink } from "react-router"
import { MERCH } from "../../settings";
import { useEffect, useState } from "react";
import { useAltair } from "../context/app.context";

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

function Product() {
  const { addItemToCart, setIsDrawerOpen } = useAltair();
  const { id } = useParams();
  const [product, setProduct] = useState(MERCH.find((product) => product.id === id));
  const [photoOnView, setPhotoOnView] = useState(product.photos[0]);
  const [amount, setAmount] = useState(1);
  const [size, setSize] = useState(null);
  const [variant, setVariant] = useState(null);

  function plus() {
    setAmount(amount + 1)
  }

  function rest() {
    setAmount(amount - 1)
  }

  function getThreeExcludingId() {
    const filtered = MERCH.filter(item => item.id !== id);
    const shuffled = filtered.sort(() => Math.random() - 0.5);
  
    return shuffled.slice(0, 3);
  }

  function selecVariant(event) {
    setVariant(event.target.value)
  }

  const [recomends, setRecomends] = useState(getThreeExcludingId());

  function addItem(item) {
    const itemToBuy = {
      id: generateId(),
      name: item.name,
      price: item.price,
      photo: item.photos[0],
      pid: item.id,
      amount
    }

    setAmount(1);
    addItemToCart(itemToBuy);
    setIsDrawerOpen(true)
    setVariant(null)
  }
 
  useEffect(() => {
    setProduct(MERCH.find((product) => product.id === id))
  })
  
  useEffect(() => {
    setRecomends(getThreeExcludingId())
    setPhotoOnView(product.photos[0])
    setAmount(1)
    setSize(null)

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [product])

  return (
    <section className="w-full min-h-screen bg-[url(/assets/paper.svg)]">
      <div className="w-full max-w-[1100px] m-auto">
        <nav className="w-full p-2 mb-10">
          <NavLink className='text-nowrap font-planc cursor-pointer flex gap-2 text-[#e67ea7] text-[1rem] items-center w-fit' to="/store">
            <img src="/assets/back.svg" className="w-[8px]" alt="back to buy" />
            Seguir comprando
          </NavLink>
        </nav>
        <section className="w-full grid grid-cols-1 md:grid-cols-2">
          <div className="w-full flex flex-col-reverse md:flex-row col-span-1">
            <div className="w-full h-[100px] flex gap-1 justify-center md:w-[100px] md:flex-none md:justify-start md:flex-col p-2">
              {
                product.photos.map((photo, index) => {
                  const isOnView = photo === photoOnView;
                  const className = isOnView ? 'h-full border-1 border-[#e67ea7] rounded-lg md:h-auto' : 'h-full cursor-pointer md:h-auto';

                  return <img onClick={ () => setPhotoOnView(photo) } key={ index } src={`/products/${photo}`} className={ className } />
                })
              }
            </div>
            <div className="w-full h-[400px]  flex justify-center items-center">
              <img src={`/products/${photoOnView}`} className="h-auto w-auto max-h-[100%]"/>
            </div>
          </div>
          <div className="col-span-1 p-3 md:p-5">
            <h2 className="font-planc-medium text-[#e67ea7] text-[2.6rem] leading-10 mb-3">{ product.name }</h2>
            
            <span className="font-planc text-[1.5rem] w-full block py-3">
              ${ product.price } <span className="font-planc-thin text-[1.2rem]">MXN</span>
            </span>

            { product.size &&
              <div className="flex gap-1 py-1">
                {
                  product.size.map((productSize, index) => {
                    const className = size === productSize ? 'w-[35px] h-[35px] bg-[#e67ea7] text-white rounded-lg text-[.8rem] flex justify-center items-center'
                     : 'w-[35px] h-[35px] border-1 border-[#e67ea7] text-[#e67ea7] rounded-lg text-[.8rem] flex justify-center items-center cursor-pointer';

                    return <button
                      key={ index }
                      className={ className }
                      onClick={ () => setSize(productSize) }
                    >
                      { productSize }
                    </button>
                  })
                }
              </div>
            }

            { product.variants &&
              <select defaultValue={ product.variants[0] } className="w-full max-w-[300px] px-4 py-3 font-planc text-[1rem] text-white bg-[#e67ea7] border-none outline-none rounded-full" onChange={ selecVariant }>
                {
                  product.variants.map((productVariant, index) => {
                    const isSelected = productVariant === variant;

                    return <option key={ index } selected={ isSelected } value={ productVariant }> { productVariant } </option>
                  })
                }
              </select>
            }
            
            <div className="font-planc-medium text-[#e67ea7]  w-fit rounded-full overflow-hidden border-1 border-[#e67ea7] text-[1.2rem] my-5">
              <button onClick={ rest } className="w-[30px] h-[30px] mr-5 cursor-pointer" disabled={amount <= 1}>-</button>
              { amount }
              <button onClick={ plus } className="w-[30px] h-[30px] ml-5 cursor-pointer">+</button>
            </div>

            <p className="w-full py-2 font-planc-thin text-[1.1rem] leading-6 font-bold">
              { product.description }
            </p>

            <button onClick={ () => addItem(product) } className="my-5 w-full text-nowrap font-planc px-8 py-2 rounded-full border-1 text-[#e67ea7] border-[#e67ea7] hover:bg-[#e67ea7] hover:text-[white] active:bg-[#e67ea7] active:text-[white] cursor-pointer">
              Añadir al carrito
            </button>
          </div>
        </section>
        <section className="w-full py-2">
          <h2 className="font-planc text-[#e67ea7] text-[1.6rem]">También te podría gustar...</h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3">
            {
              recomends.map((recommend) => {
                return <div key={ recommend.id } className="col-span-1 p-2">
                  <div className="w-full overflow-hidden">
                    <img className="h-auto w-auto max-h-[100%]" src={ `/products/${recommend.photos[0]}` } />
                  </div>
                  <div className="w-full pt-1 flex flex-col items-center">
                    <span className="font-planc my-1 text-[1.4rem] md:text-[1.6rem] text-center leading-6">
                      { recommend.name }
                    </span>
                    <span className="font-planc text-[1rem] md:text-[1.2rem] text font-planc-thin my-2">
                      ${ recommend.price } MXN
                    </span>
                    <NavLink
                      className='text-nowrap font-planc px-8 rounded-full border-1 text-[#e67ea7] border-[#e67ea7] hover:text-[white] hover:bg-[#e67ea7] active:bg-[#e67ea7] active:text-[white] cursor-pointer'
                      to={ `/store/${recommend.id}` }>
                      Comprar
                    </NavLink>
                  </div>
                </div>
              })
            }
          </div>
        </section>
      </div>
      
    </section>
  )
}

export default Product
