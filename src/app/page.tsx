import Content from "./components/content";
import Footer from "./components/footer";
import Header from "./components/header";
import "./styles/page.css";

export default function Home() {
  return (
    <>
      <div className="home">
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </div>
    </>
  );
}
