import './jobtypes.css';
import green_circal from '../../../assets/Ellipse 63.png'

export default function Jobtype() {
  return (
    <>
      <section className="min-vh-100 row Professionnels-section container-xl mx-auto cenetr-grid">
        <div className="col-12 text-center mb-md-5">
          <img src="./public/svg file 1.png" alt="" />
          <h1 className="Professionnels-titel">Autant que Professionnels, <br /> développer votre
            <span>activité</span></h1>
        </div>
        <div className="row types-container">
          <div className="col-md-6 mb-4 col-lg-4">
            <div className="titel-box-two mx-auto mx-lg-0 d-flex align-items-center" style={{ gap: "24px" }}>
              <div className="inner-content d-flex align-items-center" style={{ gap: "24px" }}>
                <img src={green_circal} className="img-titel" alt="" />
                <h3 className="Professionnel-titel">Trouvez <br /> des clients</h3>
              </div>
            </div>
            <p className="Professionnel-discrption text-center my-4">Des milliers de demandes <br /> chaque jour</p>
            <p className="Professionnel-discrption text-center">Partout en France</p>
          </div>
          <div className="col-md-6 mb-4 col-lg-4 second-sction">
            <div className="titel-box-two mx-auto mx-lg-0 d-flex align-items-center" style={{ gap: "24px" }}>
              <div className="inner-content d-flex align-items-center" style={{ gap: "24px" }}>
                <img src={green_circal} className="img-titel" alt="" />
                <h3 className="Professionnel-titel">Développez <br /> votre visibilité</h3>
              </div>
            </div>
            <p className="Professionnel-discrption text-center my-4">référencement de votre profil sur <br /> les moteurs de recherche</p>
            <p className="Professionnel-discrption text-center">Collecte de vos avis clients</p>
          </div>
          <div className="col-lg-4 thered-sction">
            <div className="titel-box-two mx-auto mx-lg-0 d-flex align-items-center" style={{ gap: "24px" }}>
              <div className="inner-content d-flex align-items-center" style={{ gap: "24px" }}>
                <img src={green_circal} className="img-titel" alt="" />
                <h3 className="Professionnel-titel">Gérez<br /> votre activité</h3>
              </div>
            </div>
            <p className="Professionnel-discrption text-center my-4">Paiement par carte bancaire <br /> sans commission</p>
            <p className="Professionnel-discrption text-center">Suivi de votre chiffre d'affaires</p>
          </div>
        </div>
      </section>
    </>
  );
}
