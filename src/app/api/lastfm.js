import axios from 'axios';

const key = process.env.LASTFM_API_KEY;

export default async function handler(req, res) {
	const response = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=jubstacheit_&api_key=${key}&format=json`);
	res.json(response.data);
}