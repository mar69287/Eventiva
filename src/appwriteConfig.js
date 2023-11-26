import { Client, Account } from 'appwrite';
const client = new Client();

client
    .setEndpoint(process.env.REACT_APP_APPWRITE_ENDPOINT)
    .setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID);
    // .setEndpoint(`https://cloud.appwrite.io/v1`)
    // .setProject(`65559e0a3a0f1ad26e92`);

export const account = new Account(client)

export default client