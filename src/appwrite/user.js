import conf from '../conf/conf'
import { Client, Account, ID } from 'appwrite';



export class UserService {

    client = new Client();
    constructor() {
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectID)

        this.Account = new Account(this.client);
    }


};

const userService = new UserService();
export default userService;