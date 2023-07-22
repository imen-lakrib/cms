import Image from "next/image";
import styles from "./page.module.css";

//notion
import {
  getNotionData,
  NotionDatabaseItem,
} from "./config/notion-sdk/notionExample"; // Update this path
import { Client } from "@notionhq/client";

// Create a new Notion client instance
const notion = new Client({
  auth: process.env.NOTION_SECRET,
});

export default function Home() {
  // notion db :
  const databaseId = process.env.DATABASE_ID;
  const data = async () => {
    const response = await notion.databases.query({
      database_id: databaseId,
    });
    console.log(response.results);
  };

  

  return (
    <main className={styles.main}>
      <h1>CMS</h1>
    </main>
  );
}
