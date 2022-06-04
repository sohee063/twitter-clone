import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import Navbar from "./component/Navbar";
import { useEffect, useState } from "react";
import PrivatePage from "./page/PrivatePage";

// 1. 전체상품페이지, 로그인페이지, 상품상세페이지
// 1-1. 네비게이션 바 만들기

// 2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.

// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.

// 3. 상품상세를 눌렀으나, 로그인이 안되있을 경우 로그인 페이지가 먼저 나온다.
// 4. 로그인이 되어 있을 경우에는 상품상세페이지를 볼 수 있다.
// 5. 상품상세페이지에서 로그아웃버튼을 누를 경우 로그아웃이 된다.
// 5. 로그아웃이 되면 상품상세페이지를 볼 수 없다. 다시 로그인페이지가 보인다.
// 6. 로그인을 하면 로그아웃이 보이고 로그아웃을 하면 로그인이 보인다.
// 7. 상품을 검색할 수 있다.

function App() {
  const [auth, setAuth] = useState(false); // true면 로그인이 됨.
  const [productItem, setProductItem] = useState(null);
  console.log("결과값", productItem);

  useEffect(() => {
    console.log("aaa", auth);
  }, [auth]);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<ProductAll setProductItem={setProductItem} />}
        />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route
          path="/product/:id"
          element={<PrivatePage auth={auth} productItem={productItem} />}
        />
      </Routes>
    </div>
  );
}

export default App;
