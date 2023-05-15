import "./accomodation.scss";
import Header from "../../components/Header";
import Slide from "../../components/Carousel";
import Collapse from "../../components/Collapse";
import Footer from "../../components/Footer";
import redStar from "../../assets/red_star.svg";
import greyStar from "../../assets/grey_star.svg";
import datas from "../../data/data.json";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";

export default function Accomodation() {
  document.title = "Annonce - Kasa";
  const navigate = useNavigate();

  const [imageSlide, setImageSlide] = useState([]);

  const idAccomodation = useParams("id").id;
  const dataAccomodation = datas.filter((data) => data.id === idAccomodation);

  useEffect(() => {
    const dataAccomodation = datas.filter((data) => data.id === idAccomodation);
    if (dataAccomodation.length === 0) {
      navigate("error");
      return;
    }
    setImageSlide(dataAccomodation[0].pictures);
  }, [idAccomodation, navigate]);

  if (dataAccomodation.length === 0) {
    <Navigate to="error" />;
    return;
  }

  const name = dataAccomodation[0].host.name.split(" ");
  const rating = dataAccomodation[0].rating;

  return (
    <>
      <Header />
      <Slide imageSlide={imageSlide} />
      <main className="accomodation">
        <div className="accomodation_infos">
          <div className="accomodation_infos_main">
            <h1>{dataAccomodation[0].title}</h1>
            <p>{dataAccomodation[0].location}</p>
            <div>
              {dataAccomodation[0].tags.map((tag, index) => {
                return <span key={index}>{tag}</span>;
              })}
            </div>
          </div>
          <div className="accomodation_infos_host">
            <div>
              <div className="accomodation_infos_host_profile">
                <span>{name[0]}</span>
                <span>{name[1]}</span>
              </div>
              <img
                src={dataAccomodation[0].host.picture}
                alt="owner of this accomodation"
                className="accomodation_infos_host_picture"
              ></img>
            </div>
            <div className="accomodation_infos_host_rating">
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <img
                    key={index}
                    src={ratingValue <= rating ? redStar : greyStar}
                    alt="star"
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="accomodation_collapse">
          <div className="accomodation_collapse_item">
            <Collapse title={"Description"}>
              <p>{dataAccomodation[0].description}</p>
            </Collapse>
          </div>
          <div className="accomodation_collapse_item">
            <Collapse title={"Équipements"}>
              <ul>
                {dataAccomodation[0].equipments.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </Collapse>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
