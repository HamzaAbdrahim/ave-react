import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useYourContext } from "../../../../context/MultiStepForm";
import { Pritaclerschema } from "../../../../schema";
import Checkbox from "../../ui/Checkbox";
import Inputlabel from "../../ui/Inputlabel";
import { PritaclerType } from "../../../../types/Types";
import { postPritaclerUserData } from "../../../../service/apiService";
 
const PopupPritacler = () => {
  const { handleNext , ChangelodingPopUpState } = useYourContext();
  const handleCheckboxChange = (checked: boolean) => {
    console.log('Checkbox checked:', checked);
  };
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<PritaclerType>({ resolver: yupResolver(Pritaclerschema)});
  
  const onSubmit = async (data: PritaclerType) => {
    console.log(data);
    handleNext()
    ChangelodingPopUpState(true);
    try {
    await postPritaclerUserData(data);
    ChangelodingPopUpState(false);
    handleNext()
    } catch (error) {
      console.error('Error submitting form:', error);
    ChangelodingPopUpState(false);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}
       className={`animate__animated animate__bounceInDown row gap-4`}>
      <div className="d-flex flex-column w-100 flex-md-row gap-2">
      <div className="flex-1 position-relative">
      <Inputlabel name={"nom"} type={"text"} label={"Nom"} error={errors.nom}      
            register={register}  />   
        </div>
      <div className="flex-1 position-relative">
      <Inputlabel name={"prenom"} type={"text"} label={"Prénom"} error={errors.prenom}      
            register={register}  />   
        </div>
      </div>
        <div className="col-12 position-relative">
        <Inputlabel name={"adressePostale"} type={"text"} label={"Adresse postale"} error={errors.adressePostale}      
            register={register}  />    
        </div>
        <div className="col-12 position-relative">
        <Inputlabel name={"numeroTelephone"} type={"text"} label={"Numéro de téléphone"} error={errors.numeroTelephone}      
            register={register}  />
        </div>
        <div className="col-12 position-relative">
        <Inputlabel name={"email"} type={"text"} label={"Adresse E-mail"} error={errors.email}      
            register={register}  />
        </div>
      <div className="flex-items gap-3">
      <Checkbox onChange={handleCheckboxChange}  />
      <label className="form-check-label" htmlFor="exampleCheck1">
        J’accepte {" "}
            <span>  
              les conditions générales de vente et d’utilisation    
          </span> 
        </label>
      </div>
        <button type="submit" className="btn-primary col-8 mx-auto" >M’inscrire</button>
      </form>
    </>
  )
}

export default PopupPritacler