import React from 'react'
import axios from 'axios'
import Image from 'next/image'
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable'

export default async function LatestTracks() {
	const key = process.env.LASTFM_API_KEY

	const getTopTracks = async () => {
		const response = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=jubstacheit_&api_key=${key}&format=json&limit=20`)
		return response.data.recenttracks.track.slice(0,3)
	}

	const latestTracks = await getTopTracks()

	return (
		<ResizablePanelGroup
			direction="horizontal"
			className="rounded-base max-w-36 max-h-24 border-2 border-border text-text dark:border-darkBorder shadow-light dark:shadow-dark"
		>
			<ResizablePanel defaultSize={100}>
				<div className="flex h-full w-full items-center justify-center bg-main">
					<Image src={latestTracks[0].image[3]['#text']} width={200} height={200} />
				</div>
			</ResizablePanel>
			<ResizablePanel defaultSize={50}>
				<ResizablePanelGroup direction="vertical">
					<ResizablePanel defaultSize={50}>
						<div className="flex h-full w-full items-center justify-center bg-main">
							<Image src={latestTracks[1].image[3]['#text']} width={200} height={200} />
						</div>
					</ResizablePanel>
					<ResizablePanel defaultSize={50}>
						<div className="flex h-full w-full items-center justify-center bg-main">
							<Image src={latestTracks[2].image[3]['#text']} width={200} height={200} />
						</div>
					</ResizablePanel>
				</ResizablePanelGroup>
			</ResizablePanel>
		</ResizablePanelGroup>
	)
}
