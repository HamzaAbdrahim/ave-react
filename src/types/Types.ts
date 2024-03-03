export type reviweCard = {
    id:number;
    userImg:string;
    userName:string;
    userRate:number;
    reviweDiscrption:string;
    reviewPubliched:string;
}
export type carsoulCard = {
    id:number;
    userImg:string;
    userName:string;
    userJob:string;
    userTages:string[];
}


  export type TypePropsBigRequest = {
    id: number;
    userName: string;
    userLocation: string;
    requestImageSrc: string;
    requestDescription: string;
    requestPublishedTime: string;
    userImageSrc: string;
  }
  
  export type TypePropsReview = {
    id: number;
    userName: string;
    userType: string;
    userRate: number;
    userImageSrc: string;
    reviewDescription: string;
    reviewPublishedTime: string;
    isActive: boolean;
  }

  export type UserPostProps =  {
    id:number;
    userName: string;
    postTime: string;
    userImagePost: string;
    userLocation: string;
    postImage: string[];
    postDescription: string;
  }

  export type UserFavorisProfileProps = {
    id:number;
    userName: string;
    userType: string;
    userLocation: string;
    userImage: string;
  }

  export type UserOfferUser = {
    id: number;
    name: string;
    rating: number;
    type: "Particulier" | "Professional";
    online: boolean;
    link: string;
    workingImages: string[];
  };

  export type UserOfferCardTypes = {
    title: string;
    description: string;
    users: UserOfferUser[];
  };
  
  export type DemandItem = {
    title: string;
    responses: number;
    buttons: string[];
  };

  export interface ProfileCardProps {
      user_img: string;
      name: string;
      rating: string;
      category: string;
      location: string;
      city: string;
      memberSince: string;
      avgResponseTime: string;
      presentation: string,
      demandesRepondues:DemandItem[],
      certifications: string[]
  }

  export type interpriceInputForm =  {
    nomCommercial?: string | undefined; 
    metier?: string | undefined; 
    nom: string; prenom: string; 
    adressePostale: string;
    numeroTelephone: string; 
    email: string;
  }

  export type PritaclerType =  {
    nom:string,
    prenom:string,
    adressePostale:string,
    numeroTelephone:string,
    email:string,
  }

  export type associationType =  {
    association_nom:string,
    adressePostale:string,
    numeroTelephone:string,
    email:string,
  }

  export type MessageUserProps = {
    userId:number;
    userName: string;
    userImage: string;
    onlineStatus: boolean;
    lastOnlineTime: string;
  }

  export type User = {
    id: number;
    email: string;
    password: string;
    userName: string;
    onlineStatus: boolean;
    lastOnlineTime: string;
    userImg: string;
    rating: string;
    category: string;
    location: string;
    city: string;
    memberSince: string;
    avgResponseTime: string;
    presentation: string;
    demandesRepondues: DemandItem[];
    certifications: string[];
  } & {
    userType: "Particulier" | "Indépendant" | "Entreprise" | "Association";
    interpriceInputForm: interpriceInputForm;
    PritaclerType: PritaclerType;
    associationType: associationType;
  };

  export type RequestType = {
    RequestId:number;
    User:User;
    RequestImageSrc:string,
    RequestDescription: string,
    RequestPublishedTime: string,
    RequestTitle:string,
    RequestContent:string,
    RequestImages: string[],
    Likes:number;
    comment:string[];
    RequestCategory:string|string[];
  }

  export interface Place {
    "place name": string;
    longitude: string;
    state: string;
    "state abbreviation": string;
    latitude: string;
  }
  
  export interface LocationData {
    "post code": string;
    country: string;
    "country abbreviation": string;
    places: Place[];
  }