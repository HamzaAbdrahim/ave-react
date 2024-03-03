import { DemandItem } from "../../../types/Types";
import Certifications from "./Certifications";
import Interdction from "./Interdction";
import Listdmaend from "./Listdmaend";
import "./userAbout.css";

type PropsTypesNeeded = {
  presentation: string,
  demandesRepondues:DemandItem[],
  certifications: string[]
}
const UserAbout:React.FC<PropsTypesNeeded> = ({presentation,
  demandesRepondues,
  certifications}) => {
  
  return (
    <div className="d-grid gap-3">
      <Interdction description={presentation} />
      <Listdmaend demands={demandesRepondues} />
      <Certifications items={certifications} />
    </div>
  )
}

export default UserAbout