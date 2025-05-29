/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react';


const CACHE_ALTAIR_KEYS = {
  SHOPPING_CART: 'altair:shopping-cart',
  BOOK_UNLOCKED: 'altair:book-unlocked',
}

const AppContext = createContext();

function setCache(key, value, ttlMinutes = 15) {
  const now = Date.now();
  const item = {
    value,
    expiry: now + ttlMinutes * 60 * 1000,
  };

  localStorage.setItem(key, JSON.stringify(item));
}

function getCache(key) {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) return null;

  const item = JSON.parse(itemStr);
  const now = Date.now();

  if (now > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }

  return item.value;
}

function AltairProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [isBookUnlucked, setIsBookUnlcked] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  function addItemToCart(item) {
    const cart = [
      ...shoppingCart,
      item,
    ];

    setShoppingCart(cart);
    setCache(CACHE_ALTAIR_KEYS.SHOPPING_CART, cart, 50);
  }

  function removeItemFromCart(item) {
    const cart = shoppingCart.filter(i => i.id !== item.id);

    setShoppingCart(cart);
    setCache(CACHE_ALTAIR_KEYS.SHOPPING_CART, cart, 50);
  }

  function unlockChapterTemporaly(chapterId) {
    setCache(chapterId, true, 10)
  }

  function unlockBook() {
    setIsBookUnlcked(true);
    setCache(CACHE_ALTAIR_KEYS.BOOK_UNLOCKED, true, 120);
  }

  function isChapterUnlocked(chapterId) {
    return getCache(chapterId) || false;
  }

  function setCartItemProperty(itemId, property, value) {
    const updatedItems = shoppingCart.map(item =>
      item.id === itemId ? { ...item, [property]: value } : item
    );

    setShoppingCart(updatedItems);
    setCache(CACHE_ALTAIR_KEYS.SHOPPING_CART, updatedItems, 50);
  }

  function cleanShoppingCart() {
    setShoppingCart([]);
    setCache(CACHE_ALTAIR_KEYS.SHOPPING_CART, [], 50);
  }

  useEffect(() => {
    const localShoppingCart = getCache(CACHE_ALTAIR_KEYS.SHOPPING_CART);
    const localBookStatus = getCache(CACHE_ALTAIR_KEYS.BOOK_UNLOCKED);

    if (localShoppingCart) {
      setShoppingCart(localShoppingCart);
    }

    setIsBookUnlcked(localBookStatus || false);
  }, []);

  return (
    <AppContext.Provider value={{
      isDrawerOpen,
      shoppingCart,
      isBookUnlucked,
      addItemToCart,
      cleanShoppingCart,
      isChapterUnlocked,
      removeItemFromCart,
      unlockBook,
      unlockChapterTemporaly,
      setCartItemProperty,
      setIsDrawerOpen
    }}>
      {children}
    </AppContext.Provider>
  );
}

const useAltair = () => useContext(AppContext);

export { AltairProvider, useAltair };
