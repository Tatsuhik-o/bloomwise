import { Fragment, useEffect } from "react";
import niceSelect from "react-nice-select";
import ImageView from "../components/ImageView";
import VideoPopup from "../components/VideoPopup";
import { animation } from "../utils";
import Header from "./header/Header";
import Footer from "./footer/Footer";
const Layout = ({ children }) => {
  useEffect(() => {
    niceSelect();
  }, []);

  useEffect(() => {
    animation();
  }, []);

  return (
    <Fragment>
      <Header />
      <VideoPopup />
      <ImageView />
      {children}
      <Footer />
    </Fragment>
  );
};
export default Layout;
