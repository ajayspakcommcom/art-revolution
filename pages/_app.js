import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '@/styles/globals.css';
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Wrapper from "@/components/wrapper/wrapper";

const App = ({ Component, pageProps }) => {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Header />
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
