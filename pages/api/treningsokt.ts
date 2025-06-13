import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  apiVersion: "2023-01-01",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { sessionId, action } = req.body;
  if (!sessionId || !["join", "leave"].includes(action)) {
    return res.status(400).json({ error: "Invalid request" });
  }

  try {
    const patch = client.patch(sessionId);
    if (action === "join") patch.dec({ availableSpots: 1 });
    if (action === "leave") patch.inc({ availableSpots: 1 });
    const updated = await patch.commit();
    res.status(200).json(updated);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}