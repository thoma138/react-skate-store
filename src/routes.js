import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";

const BaseRouter = () => (
  <>
    <Layout>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/' element={<Home />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
    </Layout>
  </>
);

export default BaseRouter;
