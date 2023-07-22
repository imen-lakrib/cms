// notionExample.ts
import { Client } from "@notionhq/client";

// Create a new Notion client instance
const notion = new Client({
  auth: process.env.NOTION_SECRET,
});

// Interface for a Notion database item
export interface NotionDatabaseItem {
  id: string;
  properties: {
    Name: {
      title: Array<{ plain_text: string }>;
    };
    Age: {
      number: number;
    };
    Email: {
      email: string;
    };
    // Add more properties here if needed
  };
}

// Function to fetch data from the Notion database
export async function getNotionData(): Promise<NotionDatabaseItem[]> {
  try {
    const databaseId = process.env.DATABASE_ID;
    const response = await notion.databases.query({
      database_id: databaseId,
    });

    // Extract relevant data from the response
    const notionData: NotionDatabaseItem[] = response.results.map((result) => ({
      id: result.id,
      properties: result.properties as NotionDatabaseItem["properties"],
    }));

    return notionData;
  } catch (error) {
    console.error("Error fetching data from Notion:", error);
    return [];
  }
}
