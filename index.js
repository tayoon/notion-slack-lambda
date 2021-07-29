import { Client } from '@notionhq/client';

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function handler() {
  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };

  const myPage = await notion.databases.query({
    database_id: 'd2194450505742bea642149fb7aecab2',
    filter: {
      property: '作成日時',
      text: {
        equals: '2021-07-28',
      },
    },
  });

  console.log(myPage);
  return response;
}
