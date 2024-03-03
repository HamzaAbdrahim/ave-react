import './footer.css'
import FooterSection from "./FooterSection";

const Footer = () => {
  const FAQ_ITEMS: string[] = [
    "Je n'arrive pas à faire vérifier mon mobile",
    "Je n'arrive pas à me connecter à mon compte",
    "Je n'arrive pas à m'inscrire depuis le site web",
    "Comment réinitialiser / modifier mon mot de passe",
  ];
  return (
    <footer className="min-vh-100 d-grid" style={{placeItems:'center'}}>
      <div className="d-flex flex-column mt-3 flex-sm-row footer-wrapper align-items-start justify-content-center flex-wrap gap-5 container">
        <FooterSection title="QUESTIONS FRÉQUENTES - AIDE" items={FAQ_ITEMS} Showlogo />
        <FooterSection title="QUESTIONS FRÉQUENTES - AIDE" items={FAQ_ITEMS} />
        <FooterSection title="QUESTIONS FRÉQUENTES - AIDE" items={FAQ_ITEMS} />
        <FooterSection title="QUESTIONS FRÉQUENTES - AIDE" items={FAQ_ITEMS} IslastSection />
      </div>
    </footer>
  );
};

export default Footer;