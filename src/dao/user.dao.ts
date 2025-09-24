import { IUser } from "../interface/models/user.interface";
import { User } from "../models/user.model";

export class UserDAO {
    private static instance:UserDAO;
    public static getInstance():UserDAO {
        if (!UserDAO.instance) {
            UserDAO.instance = new UserDAO();
        }
        return UserDAO.instance;
    }

    public async createUser(user: IUser): Promise<IUser> {
        try{
            const newUser = User.create(user);
            return newUser;
        }catch(error:any){
            throw new Error(error);
        }

    }

}