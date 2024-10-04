import React from 'react'
import axios from 'axios'
import Image from 'next/image'

export default async function LatestTracks() {
	const key = process.env.LASTFM_API_KEY

	const getTopTracks = async () => {
		const response = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=jubstacheit_&api_key=${key}&format=json&limit=20`)
		return response.data.recenttracks
	}

	const latestTracks = await getTopTracks()
	const img = latestTracks.track[0].image[3]['#text']

	return (
		<div>
			<Image src={img} width={20} height={20}/>
		</div>
	)
}
