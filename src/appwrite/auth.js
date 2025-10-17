import conf from '../conf/conf'
import { Client, Account, ID } from 'appwrite';



export class AuthService {

    


    client = new Client();
    constructor() {
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectID)

        this.Account = new Account(this.client);
    }


    async createUser({email, password, name}) {

        try {
            
            const userCreated = this.Account.create({
                userId: ID.unique(),
                email: email,
                password: password,
                name: name
            })

            if (userCreated) {
                return true;
            }
            else {
                return false;
            }

        } catch (error) {
            throw error;
        }
    }


}



const authService = new AuthService();
export default authService;