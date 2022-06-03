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
                Vietpro Academy thành lập năm 2009. Chúng tôi đào tạo chuyên sâu trong 2 lĩnh vực là Lập trình
                Website &amp; Mobile nhằm cung cấp cho thị trường CNTT Việt Nam những lập trình viên thực sự chất
                lượng, có khả năng làm việc độc lập, cũng như Team Work ở mọi môi trường đòi hỏi sự chuyên nghiệp
                cao.
                </p>
            </div>
            <div id="address" className="col-lg-3 col-md-6 col-sm-12">
              <h3>Địa chỉ</h3>
              <p>B8A Võ Văn Dũng - Hoàng Cầu Đống Đa - Hà Nội</p>
              <p>Số 25 Ngõ 178/71 - Tây Sơn Đống Đa - Hà Nội</p>
            </div>
            <div id="service" className="col-lg-3 col-md-6 col-sm-12">
              <h3>Dịch vụ</h3>
              <p>Bảo hành rơi vỡ, ngấm nước Care Diamond</p>
              <p>Bảo hành Care X60 rơi vỡ ngấm nước vẫn Đổi mới</p>
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