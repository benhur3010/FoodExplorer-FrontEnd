import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider ({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const [dataDishes, setDishes] = useState([]);

  async function signIn({ email, password }) {

    try {
      setIsLoading(true);
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;
      setIsLoading(false);

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
      localStorage.setItem("@foodexplorer:token", token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({ user, token });

      toast.success(`Bem vindo(a), ${user.name}!` , {
        position: toast.POSITION.TOP_CENTER
      });

    } catch (error) {
      setIsLoading(false);
      if (error.response){
        toast.error(`${error.response.data.message}` , {
          position: toast.POSITION.TOP_RIGHT
        });
      } else {
        toast.error("Não foi possível entrar.", {
          position: toast.POSITION.TOP_RIGHT
        });
      }
    }

  }

  async function fetchDishes () {
    setIsLoading(true);
    const responseDish = await api.get("/dishes");
    setIsLoading(false);
    setDishes(responseDish.data);
  }

  function signOut () {
    localStorage.removeItem("@foodexplorer:user");
    localStorage.removeItem("@foodexplorer:token");

    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("@foodexplorer:token");
    const user = localStorage.getItem("@foodexplorer:user");

    if(token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, 
  []);

  return (
    <AuthContext.Provider value={{ 
      signIn,
      signOut,
      fetchDishes,
      dataDishes,
      user: data.user,
      isLoading,
      setIsLoading
      }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { 
  AuthProvider,
  useAuth
 }