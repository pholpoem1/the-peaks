import React from "react";
import Container from "../widgets/container";
import Footer from "../widgets/footer";
import Header from "../widgets/header";
import Loader from "../widgets/loader";

const Layout = (props: { children: any }) => {
  return (
    <>
      <Header />
      <div className="toolbar"></div>
      <Container>
        <>
          <Loader />
          {props.children}
        </>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
