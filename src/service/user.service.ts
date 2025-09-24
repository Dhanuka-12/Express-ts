import { UserDAO } from "../dao/user.dao";
import { IUser } from "../interface/models/user.interface";

export class UserService {
    private static instance:UserService;
    private userDAO = UserDAO;
    public static getInstance():UserService {
        if (!UserService.instance) {
            UserService.instance = new UserService();
        }
        return UserService.instance;
    }

    private constructor() {
        this.userDAO.getInstance();
    }

    public async createUser(user:IUser):Promise<IUser> {
        try{
            const newUser = await this.userDAO.getInstance().createUser(user);
            return newUser;
        }catch(error:any){
            throw new Error(error);
        }

    }
}