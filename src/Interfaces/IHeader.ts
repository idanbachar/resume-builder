export interface IHeader {
  fullname: IFullname;
  image?: string;
  role: string;
  phone: string;
  location: string;
  aboutMe: string;
}

export interface IFullname {
  firstname: string;
  lastname: string;
}
