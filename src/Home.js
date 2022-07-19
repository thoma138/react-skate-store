import React from "react";
import "./Home.css";
import Product from "./Product";
import Header from "./Header";

import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <Outlet />
      <div className='home'>
        <div className='home__container'>
          <img
            className='home__image'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ1uGOiL2g0kKpo9bn6sK94pTffeGleMkryw&usqp=CAU'
            alt=''
          />{" "}
          <div className='home__row'>
            <Product
              id={"197498"}
              title={
                "ANTI HERO - SHAPED EAGLE BEACH BUMMER 10.0 SKATEBOARD DECK"
              }
              price={179.99}
              image={
                "https://cdn.shopify.com/s/files/1/0475/6461/9930/products/BeachBummer_768x.jpg?v=1657850337"
              }
              rating={5}
            />
            <Product
              id={"820948"}
              title='Powell Peralta - OG Ripper Checker 10.0 Reissue Skateboard Deck'
              price={199.99}
              rating={3}
              image={
                "https://cdn.shopify.com/s/files/1/0475/6461/9930/products/powell-peralta-ripper-og-checker-deck_768x.jpg?v=1657191078"
              }
            />
            <Product
              id={"348903"}
              title={
                "BAKER - ZACH ALLEN BRAND NAME WHITE/BLUE 8.0 SKATEBOARD DECK"
              }
              price={129.99}
              rating={4}
              image={
                "https://cdn.shopify.com/s/files/1/0475/6461/9930/products/baker-zach-brand-name-white-blue-deck_768x.jpg?v=1656326028"
              }
            />
          </div>
          <div className='home__row'>
            <Product
              id={"329494"}
              title={
                "INDEPENDENT - SLAYER SILVER STANDARD 159 SKATEBOARD TRUCKS"
              }
              price={119.99}
              rating={4}
              image={
                "https://cdn.shopify.com/s/files/1/0475/6461/9930/products/independent-silver-slayer-trucks_768x.jpg?v=1653122717"
              }
            />
            <Product
              id={"239032"}
              title={"THUNDER - SCRIPT RAW HI 149 SKATEBOARD TRUCKS"}
              price={109.99}
              rating={4}
              image={
                "https://cdn.shopify.com/s/files/1/0475/6461/9930/products/thunder-script-raw-skateboard-trucks_3366b62a-c136-4c27-92bd-196f6502b270_768x.jpg?v=1652337670"
              }
            />
          </div>
          <div className='home__row'>
            <Product
              id={"933030"}
              title={
                "BONES - ELLIOT SLOAN HAMMERED 58MM 104A P5 SIDECUT SPF SKATEBOARD WHEELS"
              }
              price={74}
              rating={4}
              image={
                "https://cdn.shopify.com/s/files/1/0475/6461/9930/products/bones-sloan-hammered-58mm-wheels_768x.jpg?v=1657194618"
              }
            />
            <Product
              id={"133830"}
              title={
                "SPITFIRE - F4 OSKAR ROZENBERG SCORCHED RADIALS 55MM 99A SKATEBOARD WHEELS"
              }
              price={79}
              rating={4}
              image={
                "https://cdn.shopify.com/s/files/1/0475/6461/9930/products/spitfire-oski-scorched-wheels_768x.jpg?v=1655710109"
              }
            />
            <Product
              id={"387030"}
              title={"Dogtown - K-9 Softys 55MM 86A Skateboard Wheels"}
              price={69}
              rating={4}
              image={
                "https://cdn.shopify.com/s/files/1/0475/6461/9930/products/dogtown-k9-softys-55mm-86a-wheels_768x.jpg?v=1644556775"
              }
            />
            <Product
              id={"209348"}
              title={"FOLKLORE - CORE SOFTIES 55MM 85A SKATEBOARD WHEELS"}
              price={43.98}
              rating={5}
              image={
                "https://cdn.shopify.com/s/files/1/0475/6461/9930/products/Folklore-CoreSofties53MM83ASkateboardWheels_c0882303-bf63-4d0f-903e-c7c7b01f38f9_768x.jpg?v=1616468189"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
