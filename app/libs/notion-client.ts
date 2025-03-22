import { Client } from '@july_cm/react-notion';

export const client = new Client({ auth: process.env.NOTION_TOKEN });
