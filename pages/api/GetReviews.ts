// pages/api/getReviews.ts

import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const placeId = 'ChIJ28ZcesqZqTMRtafE1a_4KSs';  // Replace with your place ID
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}`

  const response = await fetch(url);
  const data = await response.json();

  res.status(200).json(data);
}