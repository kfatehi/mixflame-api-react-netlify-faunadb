import faunadb from 'faunadb';

const q = faunadb.query;

const API_TOKEN = process.env.API_TOKEN;
const FAUNA_SECRET = process.env.FAUNA_SECRET;

export async function handler(event, context) {
  if (event.httpMethod !== "POST") { 
    return { statusCode: 403, body: "" }
  }

  let data;
  try {
    data = JSON.parse(event.body)
  } catch(e) {
    return { statusCode: 403, body: "" }
  }

  if (data.token !== API_TOKEN)
    return { statusCode: 401, body: "" }

  if (data.action === "set") {
    try {
      const client = new faunadb.Client({ secret: FAUNA_SECRET });
      const { url, key, bpm } = data;
      let result = await client.query(q.Create(q.Class("tracks"), { data: { url, key, bpm } }))
      return { statusCode: 200, body: '{"status":"ok"}' }
    } catch(e) {
      console.log(e)
      return { statusCode: 500, body: "Error" }
    }
  } else if (data.action === "get") {
    try {
      const client = new faunadb.Client({ secret: FAUNA_SECRET });
      let result = await client.query(q.Get(q.Match(q.Index(`tracks_by_url`), data.url)))
      return { statusCode: 200, body: JSON.stringify(result.data) }
    } catch(e) {
      console.log(e)
      return { statusCode: 500, body: "Error" }
    }
  } else {
    return { statusCode: 404, body: "Actions allowed: set,get" }
  }
}
