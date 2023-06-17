import { Container, MobileWindow, DesktopWindow } from "./styles";
import {
  AiOutlineMenu,
  AiOutlineShoppingCart,
  AiOutlineBank
} from "react-icons/ai";
import { FiX } from "react-icons/fi";
import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart";
import { FiLogOut, FiSearch, FiHeart, FiClipboard } from "react-icons/fi";
import { ButtonText } from "../ButtonText";
import { Input } from "../Input";
import { useEffect, useState } from "react";
import logoImg from "../../assets/polygonTitle.svg";
import { Link, useNavigate } from "react-router-dom";

export function HeaderUsers({ itemsInCart, handleSearchChange, ...props }) {
  const [shoppingCart] = useCart();
  const [isMobileScreen, setIsMobileScreen] = useState(window.innerWidth < 820);
  const [menuOpen, setMenuOpen] = useState(true);
  const { signOut } = useAuth();
  const navigateFunc = useNavigate();

  const signOutUser = () => {
    const userConfirmation = window.confirm("Deseja mesmo sair ?");
    if (userConfirmation) {
      navigateFunc("/");
      signOut();
    }
  };

  const navigateToCart = () => {
    navigateFunc("/carrinho");
  };

  const openMenuClick = () => {
    setMenuOpen(false);
  };

  const closeMenuClick = () => {
    setMenuOpen(true);
  };

  useEffect(() => {
    const resizeWindow = () => {
      setIsMobileScreen(window.innerWidth < 820);
    };
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  return (
    <Container {...props}>
      {isMobileScreen ? (
        <MobileWindow>
          {menuOpen ? (
            <a onClick={openMenuClick}>
              <AiOutlineMenu />
            </a>
          ) : (
            <nav>
              <Link onClick={closeMenuClick}>
                <FiX />
              </Link>
              <ul>
                <li>
                  <Link to="/">
                    <AiOutlineBank />
                    Home
                  </Link>
                  <Link to="/menu">
                    <FiClipboard />
                    Menu
                  </Link>
                  <Link to="/favoritos">
                    <FiHeart />
                    Favoritos
                  </Link>
                  <a onClick={signOutUser}>
                    <FiLogOut />
                    Sair
                  </a>
                </li>
              </ul>
            </nav>
          )}
          <header>
            <img src={logoImg} alt="logo" />
            <Link to="/">food explorer</Link>
          </header>
          <div>
            <button onClick={navigateToCart}>
              <AiOutlineShoppingCart />
            </button>
            <span>{(itemsInCart = shoppingCart.length)}</span>
          </div>
        </MobileWindow>
      ) : (
        <DesktopWindow>
          <span>
            <img src={logoImg} alt="logo" />
            <Link to="/">food explorer</Link>
          </span>
          <Input
            icon={FiSearch}
            placeholder="Busque por pratos ou ingredientes"
            onChange={handleSearchChange}
          />
          <Link to="/favoritos">Meus favoritos</Link>
          <Link to="/carrinho">
            <AiOutlineShoppingCart />
            Carrinho ({(itemsInCart = shoppingCart.length)})
          </Link>
          <ButtonText icon={FiLogOut} onClick={signOutUser} />
        </DesktopWindow>
      )}
    </Container>
  );
}
