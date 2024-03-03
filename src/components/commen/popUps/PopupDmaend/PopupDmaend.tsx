import search from  '../../../../assets/search-big-icon.png'
import small_logo from  '../../../../assets/small-logo.png'
import tools_icon from  '../../../../assets/tools-icon.png'
import { useYourContext } from '../../../../context/MultiStepForm';

const PopupDmaend = () => {
  const { setActiveButton } = useYourContext();

   return (
    <>
    <section className={`popup-type-server py-3 bg-white`}>
      <div className="text-end">
        <button id="close" onClick={() => setActiveButton('nothing')}>
          <i className="bi bi-x-lg" style={{ fontSize: 'min(40px, 20px)' }}></i>
        </button>
      </div>
      <div className="text-center">
        <img src={small_logo} className="box-img" style={{ height: 'min(84px, 50%)' }} alt="" />
      <p className="box-subtitel my-4 text-center">Que souhaitez-vous faire?</p>
      </div>
      <div className="col-md-10 mx-auto">
        <div className="flex-items gap-3 gap-sm-0 justify-content-center justify-content-sm-between">
          <div className="server-box cursor-pointer p-2 flex-items justify-content-center">
            <div>
              <img src={search} alt="" />
              <h3 className="titel my-3">Trouvez un service</h3>
              <p className="discrption">Je recherche des personnes talentueuses</p>
            </div>
          </div>
          <div className="server-box cursor-pointer p-2 flex-items justify-content-center">
            <div>
              <img src={tools_icon} alt="" />
              <h3 className="titel my-3">Vendre des services</h3>
              <p className="discrption">j’aimerai proposer mes services aux gens</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default PopupDmaend;