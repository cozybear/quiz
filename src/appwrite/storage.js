import conf from '../conf/conf';
import { Storage, Client } from 'appwrite' 




export class StorageService {

    client = new Client();

    constructor() {
        this.client
        .setEndpoint("https://fra.cloud.appwrite.io/v1")
        .setProject(conf.appwriteProjectID)
        this.Storage = new Storage(this.client);
    }


    async getProfileImage(fileId) {

        return this.Storage.getFileView({
            bucketId: conf.appwriteBucketID,
            fileId: fileId,

        })
    };
}

const storageService = new StorageService();
export default storageService;