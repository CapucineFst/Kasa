import "../../style/main.scss";
import "./home.scss";
import Header from "../../components/Header";
import Gallery from "../../components/Gallery";
import Footer from "../../components/Footer";

export default function Home() {
  document.title = "Accueil - Kasa";

  return (
    <div className="home">
      <Header />
      <section className="banner">
        <p>Chez vous, partout et ailleurs</p>
      </section>
      <Gallery />
      <Footer />
    </div>
  );
}
