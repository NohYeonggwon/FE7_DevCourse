import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import "./css/index.css";

export default function App() {
  return (
    <>
      <h1 className="nanum-pen-script-regular">App Component</h1>
      <h1 className="noto-sans-kr">App Component</h1>
      <h1 className="ongleif">App Component</h1>
      <img src="/shepherd.jpg" style={{ width: "100%" }} />
      <div className="bg"></div>
      <div
        style={{
          width: "100%",
          height: "500px",
          background: `url('./src/assets/images/shepherd.jpg') no-repeat center center`,
        }}
      ></div>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}
