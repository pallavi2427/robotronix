import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../screen/Home";
import MeanDev from "../screen/MeanDev";
import About from "../screen/About";
import NodeJsDev from "../screen/NodeJsDev";
import ReactJsDev from "../screen/ReactJsDev";
import PwaDev from "../screen/PwaDev";
import AndriodAppDev from "../screen/AndriodAppDev";
import FlutterAppDev from "../screen/FlutterAppDev";
import IosAppDev from "../screen/IosAppDev";
import ReactNativeAppDev from "../screen/ReactNativeAppDev";
import Test from "../screen/Demo";
import { Header } from "../Navigation/Header";
import ContactUs from "../screen/ContactUs";
import Footer from "../Navigation/Footer";

const AllRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mean-development" element={<MeanDev />} />
          <Route path="/nodejs-development" element={<NodeJsDev />} />
          <Route path="/reactjs-development" element={<ReactJsDev />} />
          <Route
            path="/progressive-web-application-development"
            element={<PwaDev />}
          />
          <Route path="/android-app-development" element={<AndriodAppDev />} />
          <Route path="/flutter-app-development" element={<FlutterAppDev />} />
          <Route path="/ios-app-development" element={<IosAppDev />} />
          <Route
            path="/react-native-app-development"
            element={<ReactNativeAppDev />}
          />
          <Route path="contact-us" element={<ContactUs />}></Route>
          <Route path="test" element={<Test />}></Route>
        </Routes>
          </main>
        <Footer/>

      </BrowserRouter>
    </>
  );
};

export default AllRoutes;
