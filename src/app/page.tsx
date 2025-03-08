import Content from "./content";
import Footer from "./footer";
import Header from "./header";
import "./page.css";

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
