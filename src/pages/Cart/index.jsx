import { useEffect, useState } from 'react';
import { Container, Content, Payment, SectionCredit, Accept } from './styles';
import { FaRegCheckCircle } from 'react-icons/fa'
import { RiRestaurantLine } from 'react-icons/ri'
import { useCart } from '../../hooks/cart';
import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { OrderItem } from '../../components/OrderItem';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import receipt from '../../assets/receipt.svg';
import imagePix from '../../assets/pix.svg';
import imageCreditCad from '../../assets/credit-card.svg';
import imageQrCode from '../../assets/qr-code.png';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';

export function Cart() {
  const [isPix, setIsPix] = useState(true);
  const [cartUser, setCartUser] = useState();
  const [loading, setLoading] = useState(false);
  const { cart, total, paymentAccept, setPaymentAccept, handleResetCart} = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  function status(cartUser) {
    let status;

    if(cartUser.status == "pendente") {
      status = "Seu pedido está pendente"
    } else if (cartUser.status == "preparando") {
      status ="Seu pedido está em processo de preparo"
    } else if (cartUser.status == "entregue") {
      status = "Seu pedido foi entregue"
    } else {
      return
    }

    return status
  }

  function handleCreatedCart(cart) {
    return {
      status: 'pendente',
      paymentMethod: isPix ? 'pix': 'creditCard',
      orders: cart.map(item => (
        {
          id: item.id,
          title: item.title,
          quantity: item.quantity
        }
      ))
    }
  }

  function handlePaymentPix() {
    setIsPix(true);
  }

  function handlePaymentCreditCard() {
    setIsPix(false);
  }

  async function handleFinishPayment(cart) {
    setPaymentAccept(true);
    setLoading(true);

    const newCart = handleCreatedCart(cart)
    await api.post("/carts", newCart)
    setLoading(false);
  }

  useEffect(() => {
    async function fetchCart() {
      const response = await api.get(`/carts/${user.id}`)
      setCartUser(response.data)
    }

    fetchCart()
  },[])

  return (
    <Container> 
      <Header />
      <Content>
        <div>
          <h3>Meu pedido</h3>
          <div className='section-order'>
            {
              cart && 
              cart.map(item => (
                <OrderItem key={String(item.id)} data={item}/>
              ))
            }
          </div>
          <div className="result">
            <p>Total: R$ <span>{total}</span></p>
          </div>
        </div>
        <Payment ButtonBackgroundIsActive={isPix}>
          <h3>Pagamento</h3>
          <div>
            <div>
              <button
                className='button-pix'
                type='button'
                onClick={handlePaymentPix}
              >
                <img src={imagePix} alt="ícone do pix" />
                Pix
              </button>
              <button
                className='button-credit'
                type='button'
                onClick={handlePaymentCreditCard}
              >
                <img src={imageCreditCad} alt="ícone de um cartão de credito" />
                Crédito
              </button>
            </div>
            <div className='option-payment'>
              {
                isPix ? 
                  paymentAccept ? 
                  <Accept>
                    {cartUser && cartUser.status == 'entregue' ? <RiRestaurantLine /> : <FaRegCheckCircle />}    
                    {cartUser && cartUser.status == 'entregue' ? '' : <p>Pagamento aprovado! </p>}              
                    {
                      cartUser && 
                      <span>{status(cartUser)}</span>
                    }
                    {
                      cartUser &&
                      cartUser.status == 'entregue' ? 
                        <button 
                          onClick={() => handleResetCart(user.id, navigate)}
                        >
                          Pedido recebido
                        </button> 
                        : 
                        <span></span>
                    }
                  </Accept>
                  :
                  <img src={imageQrCode} alt="qr code" />
                  :
                    paymentAccept ?
                    <Accept>
                      {cartUser && cartUser.status == 'entregue' ? <RiRestaurantLine /> : <FaRegCheckCircle />}    
                      {cartUser && cartUser.status == 'entregue' ? '' : <p>Pagamento aprovado! </p>}  
                      {
                        cartUser && 
                        <span>{status(cartUser)}</span>
                      }
                      {
                        cartUser &&
                        cartUser.status == 'entregue' ? <button>Pedido recebido</button> : <span></span>
                      }
                    </Accept>
                    :
                    <SectionCredit>
                      <Input 
                        type="number"
                        title="Número do Cartão"
                        label="card-number"
                        placeholder="0000 0000 0000 0000"
                      />
                      <div className='data-card'>
                        <Input 
                          type="data"
                          title="Validade"
                          label="validated"
                          placeholder="04/25"
                        />
                        <Input 
                          type="number"
                          title="CVC"
                          label="cvc"
                          placeholder="000"
                        />
                      </div>
                    </SectionCredit>
                }
              <Button
                image={receipt} 
                title={loading ? "Realizando pagamento" : "Finalizar pagamento"}
                onClick={() => handleFinishPayment(cart)}
                isInvisible={paymentAccept}
                disabled={loading}
              />
            </div>
          </div>
        </Payment>
      </Content>
      <Footer />
    </Container>
  )
}