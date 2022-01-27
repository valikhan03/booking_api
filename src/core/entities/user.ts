interface IUser{
    id:string;
    fullname:string;
    password:string;
};

export class User implements IUser{
    id!: string;
    fullname!: string;
    password!: string;
}