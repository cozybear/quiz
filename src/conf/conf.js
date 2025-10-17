

const conf = {
    appwriteURL: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectID: String(import.meta.env.VITE_APPWRITE_PROJECTID),
    appwriteDatabaseID: String(import.meta.env.VITE_APPWRITE_DATABASEID),
    appwriteCollectionID: String(import.meta.env.VITE_APPWRITE_COLLECTIONID),
    appwriteBucketID: String(import.meta.env.VITE_APPWRITE_BUCKETID),
    tableIDPrismClass12: String(import.meta.env.VITE_APPWRITE_TABLEID_TABLEARTICLE),
    tinyMCEApiKey: String(import.meta.env.TINYMCE_APP_ID),
    tableIDClasses: String(import.meta.env.VITE_APPWRITE_TALBLEID_CLASSES),
    tableIDClassTopic: String(import.meta.env.VITE_APPWRITE_TALBLEID_CLASSTOPIC),
    tableIDQuestions: String(import.meta.env.VITE_APPWRITE_TALBLEID_QUESTIONS),
    tableIDStudents: String(import.meta.env.VITE_APPWRITE_TABLEID_STUDENTS),
}


export default conf;