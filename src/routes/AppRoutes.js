import './App.css';
import {useEffect} from "react";
import {fetchUser} from "../redux/auth/authAction";
import {useSelector, useDispatch} from 'react-redux';
import PRODUCT_API from "../api/product";

function AppRoutes() {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser())
    productlist()
  }, []);

  const productlist = async() => {
    try {      
      const res = await PRODUCT_API.getProducts();
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      Hello ecommerce
    </div>
  );
}

export default AppRoutes;
