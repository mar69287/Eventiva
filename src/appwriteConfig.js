import { Client, Account } from 'appwrite';
import dotenv from 'dotenv';
const client = new Client();

dotenv.config();

client
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT_ID);

export const account = new Account(client)

export default client