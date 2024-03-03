import './communauté.css'
const Communauté = () => {
  return (
    <section className="min-vh-100 Communauté-section container position-relative">
    <div className="position-absolute w-100  top-50 left-50 translate-middle text-center">
      <h1 className="Communauté-titel">Communauté de prestations de services</h1>
      <p className="Communauté-discrption my-4">Service N1, leader incontesté dans la fourniture de prestations 
      <br /> de services de haute qualité en France.</p>
      <button className="big-blue-button mx-auto">Rejoignez-nous</button>
    </div>
  </section>
  )
}

export default Communauté