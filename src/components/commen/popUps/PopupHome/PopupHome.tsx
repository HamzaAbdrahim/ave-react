import small_logo from  '../../../../assets/small-logo.png'
import plan_icon from  '../../../../assets/plan.png'
import lock_icon from  '../../../../assets/lock.png'
import { useYourContext } from '../../../../context/MultiStepForm';

const PopupHome = () => {
  const { setActiveButton } = useYourContext();
  return (
    <>
    <section className={`popup-type-server py-3 row bg-white active`}>
      <div className="text-end">
        <button id="close" onClick={() => setActiveButton('nothing')}>
          <i className="bi bi-x-lg" style={{ fontSize: 'min(40px, 20px)' }}></i>
        </button>
      </div>
      <div className="text-center">
        <img src={small_logo} className="box-img" style={{ height: 'min(84px, 50%)' }} alt="" />
      <p className="box-subtitel my-4 text-center">Que souhaitez-vous poster?</p>
      </div>
      <div className="col-md-10 mx-auto">
        <div className="flex-items gap-3 gap-sm-0 justify-content-center justify-content-sm-between">
          <div className="server-box p-2 flex-items justify-content-center">
            <div>
              <img src={plan_icon} alt="" />
              <h3 className="titel my-3">
              Demande publique
              </h3>
              <p className="discrption">
              Tout les offreurs pourront répondre  à votre demande
              </p>
            </div>
          </div>
          <div className="server-box p-2 flex-items justify-content-center">
            <div>
              <img src={lock_icon} alt="" />
              <h3 className="titel my-3">
              Demande privée
              </h3>
              <p className="discrption">
              Seuls les offreurs que vous sélectionnez pourront répondre  à votre demande
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default PopupHome;

