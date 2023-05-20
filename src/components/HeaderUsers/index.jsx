import { Container, WindowMobile, WindowDesktop } from "./styles";
import {
  AiOutlineMenu,
  AiOutlineShoppingCart,
  AiOutlineBank,
  AiOutlineDatabase
} from "react-icons/ai";
import { FiX } from "react-icons/fi";

import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart";

import { FiLogOut, FiSearch, FiHeart, FiClipboard } from "react-icons/fi";
import { ButtonText } from "../ButtonText";
import { Input } from "../Input";

import { useEffect, useState } from "react";

import logo from "../../assets/polygonTitle.svg";
import { Link, useNavigate } from "react-router-dom";

export function HeaderUsers({ cartItems, onChange, ...rest }) {
  const [cart, setCart] = useCart();
  const [isScreenMobile, setIsScreenMobile] = useState(window.innerWidth < 820);
  const [openMenu, setOpenMenu] = useState(true);

  const { signOut } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    const confirm = window.confirm("Deseja mesmo sair ?");

    if (confirm) {
      navigate("/");
      signOut();
    }
  }

  function handleClickRequests() {
    navigate("/carrinho");
  }

  function handleClickOpenMenu() {
    setOpenMenu(false);
  }

  function handleClickCloseMenu() {
    setOpenMenu(true);
  }

  useEffect(() => {
    const handleWindowResize = () => {
      setIsScreenMobile(window.innerWidth < 820);
    };
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <Container {...rest}>
      {isScreenMobile ? (
        <WindowMobile>
          {openMenu ? (
            <a onClick={handleClickOpenMenu}>
              <AiOutlineMenu />
            </a>
          ) : (
            <nav>
              <Link onClick={handleClickCloseMenu}>
                <FiX />
              </Link>

              <ul>
                <li>
                  <Link to="/">
                    <AiOutlineBank />
                    Home
                  </Link>
                  <Link to="/historic">
                    <AiOutlineDatabase />
                    Histórico
                  </Link>
                  <Link to="/menu">
                    <FiClipboard />
                    Menu
                  </Link>
                  <Link to="/favoritos">
                    <FiHeart />
                    Favoritos
                  </Link>
                  <a onClick={handleSignOut}>
                    <FiLogOut />
                    Sair
                  </a>
                </li>
              </ul>
            </nav>
          )}

          <header>
            <img src={logo} alt="logo" />
            <Link to="/">food explorer</Link>
          </header>

          <div>
            <button onClick={handleClickRequests}>
              <AiOutlineShoppingCart />
            </button>
            <span>{(cartItems = cart.length)}</span>
          </div>
        </WindowMobile>
      ) : (
        <WindowDesktop>
          <span>
            <img src={logo} alt="logo" />
            <Link to="/">food explorer</Link>
          </span>

          <Input
            icon={FiSearch}
            placeholder="Busque por pratos ou ingredientes"
            onChange={onChange}
          />

          <Link to="/favoritos">Meus favoritos</Link>
          <Link to="/historic">Histórico de pedidos</Link>

          <Link to="/carrinho">
            <AiOutlineShoppingCart />
            Carrinho ({(cartItems = cart.length)})
          </Link>

          <ButtonText icon={FiLogOut} onClick={handleSignOut} />
        </WindowDesktop>
      )}
    </Container>
  );
}
