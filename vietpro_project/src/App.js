import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

// Import Shared
import Header from "./shared/components/Layout/Header";
import Menu from "./shared/components/Layout/Menu";
import Slider from "./shared/components/Layout/Slider";
import Sidebar from "./shared/components/Layout/Sidebar";
import Footer from "./shared/components/Layout/Footer";

// Import Page
import Home from "./pages/Home";
import Category from "./pages/Category";
import ProductDetails from "./pages/ProductDetails";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      {/* Header */}
      <Header />
      {/* End Header */}
      {/* Body */}
      <div id="body">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <Menu />
            </div>
          </div>
          <div className="row">
            <div id="main" className="col-lg-8 col-md-12 col-sm-12">
              {/* Slider */}
              <Slider />
              {/* End Slider */}

              <BrowserRouter>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/category" component={Category} />
                  <Route path="/product-details" component={ProductDetails} />
                  <Route path="/search" component={Search} />
                  <Route path="/cart" component={Cart} />
                  <Route path="/success" component={Success} />
                  <Route path="/404" component={NotFound} />
                </Switch>
              </BrowserRouter>

            </div>
            <Sidebar />
          </div>
        </div>
      </div>
      {/* End Body */}
      <div id="footer-top">
        <div className="container">
          <div className="row">
            <div id="logo-2" className="col-lg-3 col-md-6 col-sm-12">
              <h2><a href="#"><img src="images/logo-footer.png" /></a></h2>
              <p>
                Vietpro Academy th??nh l???p n??m 2009. Ch??ng t??i ????o t???o chuy??n s??u trong 2 l??nh v???c l?? L???p tr??nh
                Website &amp; Mobile nh???m cung c???p cho th??? tr?????ng CNTT Vi???t Nam nh???ng l???p tr??nh vi??n th???c s??? ch???t
                l?????ng, c?? kh??? n??ng l??m vi???c ?????c l???p, c??ng nh?? Team Work ??? m???i m??i tr?????ng ????i h???i s??? chuy??n nghi???p
                cao.
                </p>
            </div>
            <div id="address" className="col-lg-3 col-md-6 col-sm-12">
              <h3>?????a ch???</h3>
              <p>B8A V?? V??n D??ng - Ho??ng C???u ?????ng ??a - H?? N???i</p>
              <p>S??? 25 Ng?? 178/71 - T??y S??n ?????ng ??a - H?? N???i</p>
            </div>
            <div id="service" className="col-lg-3 col-md-6 col-sm-12">
              <h3>D???ch v???</h3>
              <p>B???o h??nh r??i v???, ng???m n?????c Care Diamond</p>
              <p>B???o h??nh Care X60 r??i v??? ng???m n?????c v???n ?????i m???i</p>
            </div>
            <div id="hotline" className="col-lg-3 col-md-6 col-sm-12">
              <h3>Hotline</h3>
              <p>Phone Sale: (+84) 0988 550 553</p>
              <p>Email: vietpro.edu.vn@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
      {/* End Footer */}
    </>
  )
}
export default App;