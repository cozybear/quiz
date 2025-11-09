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
            
            const result = this.Account.create({
                userId: ID.unique(),
                email: email,
                password: password,
                name: name
            })

            if (result) {
                return true;
            }
            else {
                return false;
            }

        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {

        try {
            
            const result = this.Account.createEmailPasswordSession({
                email: email,
                password: password
            })

            if (result) {
                return result;
            }
            
        } 
        catch (error) {
           throw error;
            
        }
        // return result;
    }

    async logout(sessionId){
        try {
            const result = await this.Account.deleteSession({

                sessionId: sessionId
            });
            return result;
        } catch (error) {
            return error;
        }
    }

    async getAccount() {
        try {
            
            const result = await this.Account.get();
            if (result) {
                return result;
            }
            else {
                return false;
            }

        } catch (error) {
            return error;
        }
    };
    
}



const authService = new AuthService();
export default authService;