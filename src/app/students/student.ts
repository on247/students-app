interface Album{
  id:number;
  title:string;
}
export interface Student {
    id?:number;
    name:string;
    username:string;
    email:string;
    phone?:string;
    maplink?:string
    albums?:Album[];
    address?:{
      street?:string
      suite?:string
      city?:string
      geo?:{
          lat:string
          lng:string
      }
    }
    website?:string;
    company?:{
      name:string
    }
}
