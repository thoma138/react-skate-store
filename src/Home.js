import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
          alt=''
        />{" "}
        <div className='home__row'>
          <Product
            id={"197498"}
            title={"The Lean Startup"}
            price={29.99}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51CTIr1bJxL._SX325_BO1,204,203,200_.jpg"
            }
            rating={5}
          />
          <Product
            id={"820948"}
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image={
              "https://m.media-amazon.com/images/I/81rus0UFhsL._AC_SL1500_.jpg"
            }
          />
          <Product
            id={"348903"}
            title={"Oral-B Genius 8000 White Electric Toothbrush"}
            price={169.99}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/71VmsxIHSPL._AC_SX522_.jpg"
            }
          />
        </div>
        <div className='home__row'>
          <Product
            id={"329494"}
            title={
              "Broadlink Compatible with Amazon Alexa Smart Home IR Automation Learning Universal Remote RM Mini3"
            }
            price={34.99}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/71nlro23-YL._AC_SX522_.jpg"
            }
          />
          <Product
            id={"239032"}
            title={
              "Huski Wine Cooler | Premium Iceless Wine Chiller | Keeps Wine or Champagne Bottle Cold up to 6 Hours | Award Winning Design | New Wine Accessory | Wine Lovers (Matte Black)"
            }
            price={89.99}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/61B0UT4tS2L._AC_SX679_.jpg"
            }
          />
        </div>
        <div className='home__row'>
          <Product
            id={"933030"}
            title={
              "Ring Video Doorbell 3  enhanced wifi, improved motion detection, easy installation"
            }
            price={249}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/61QF9KLnEFL._SY450_.jpg"
            }
          />
          <Product
            id={"133830"}
            title={
              "Bike Phone Mount Grefay Universal Bicycle/ Motorcycle Cell Phone Holder Smartphone Cradle Clamp 360° Rotatable for iPhone"
            }
            price={15.29}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/61w1AH0K-oL._AC_SX679_.jpg"
            }
          />
          <Product
            id={"387030"}
            title={
              "DeLonghi Nespresso Essenza Mini, Capsule Coffee Machine, EN85WAE, White"
            }
            price={198.0}
            rating={4}
            image={
              "https://m.media-amazon.com/images/I/71QvqcNGTPL._AC_SX679_.jpg"
            }
          />
          <Product
            id={"209348"}
            title={"Guardians of the Galaxy: Awesome Mix Vol. 1 Vinyl Edition"}
            price={43.98}
            rating={5}
            image={
              "https://m.media-amazon.com/images/I/8108mh23nWL._AC_SX679_.jpg"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
