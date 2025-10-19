import conf from '../conf/conf'
import { Client, TablesDB, ID, Databases, Query } from 'appwrite';



export class DBService {
    
    client = new Client();
    constructor() {
        this.client
        .setEndpoint(conf.appwriteURL)
        .setProject(conf.appwriteProjectID)

        this.TablesDB = new TablesDB(this.client);
    }


    async getQuestions(classId, topicId){
        try {

            return await this.TablesDB.listRows({
                databaseId: conf.appwriteDatabaseID,
                tableId: conf.tableIDQuestions,
                queries: [
                    Query.and(
                        [
                            Query.equal("Class", String(classId)),
                            Query.equal("Topic", String(topicId))
                        ]
                    )
                    
                ]
            })

        }
        catch(error){
            throw error;
        }
    }


    async getClasses() {

        try {
            // console.log(conf.tableIDClasses)
            return await this.TablesDB.listRows({
                databaseId: conf.appwriteDatabaseID,
                tableId: conf.tableIDClasses
            })
        } catch (error) {
            throw error;
        }

    }

    async getTopicsByClass(classId) {
        try {
            return await this.TablesDB.listRows({
                databaseId: conf.appwriteDatabaseID,
                tableId: conf.tableIDClassTopic,
                queries: [Query.equal("ClassId", classId)]
            })
        } catch (error) {
            throw error;
        }
    }


    createStudent({firstName, lastName, email}) {
        
            try {
                return  this.TablesDB.createRow({
                    databaseId: conf.appwriteDatabaseID,
                    tableId: conf.tableIDStudents,
                    rowId: ID.unique(),
                    data: {
                        "firstName": firstName,
                        "lastName": lastName,
                        "email": email
                    }
                })
                
            } catch (error) {
                console.error(error )
            }

       
    }

    async getTopicById(topicId) {

        return this.TablesDB.getRow({
            databaseId: conf.appwriteDatabaseID,
            tableId: conf.tableIDClassTopic,
            rowId: String(topicId)

        })

    }

    async getClassById(classId) {

        return this.TablesDB.getRow({
            databaseId: conf.appwriteDatabaseID,
            tableId: conf.tableIDClasses,
            rowId: String(classId)
        })
    };

    async getStudentIdByEmail(email) {
        return this.TablesDB.listRows({
            databaseId: conf.appwriteDatabaseID,
            tableId: conf.tableIDStudents,
            queries: [
                Query.equal("email", email)
            ]
        })
    }


}



const dbService = new DBService();
export default dbService;