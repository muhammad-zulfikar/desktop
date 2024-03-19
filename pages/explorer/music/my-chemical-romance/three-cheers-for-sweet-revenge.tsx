import Head from 'next/head';
import Image from 'next/image';
import { useContext, useState } from 'react';
import Icons from '../../../../components/modules/Icons/Icons';
import { handleWindowPriority } from '../../../../components/utils/WindowPriority/WindowPriority';
import FileExplorer from '../../../../components/windows/FileExplorer/FileExplorer';
import MediaPlayer from '../../../../components/windows/MediaPlayer/MediaPlayer';
import { Context } from '../../../../context/ContextProvider';
import styles from '../../../../styles/utils/MediaGrid.module.css';
import { MediaType } from '../../../../typings';

function Videos({ data }: { data: MediaType[] }) {
	const [openVideo, setOpenVideo] = useState<MediaType | null>(null);

	const DraggableWindowContext = useContext(Context);
	const [windowState, setWindowState] =
		DraggableWindowContext.windowPriorityState;

	const VideoContent = () => {
		return (
			<div className={styles.wrapper}>
				{data.map((video) => (
					<div
						className={`${styles.mediaItem} no_click`}
						key={video.filename}
						onClick={async () => {
							setOpenVideo(video);

							const newWindowState = await handleWindowPriority({
								windowName: 'mediaPlayer',
								windowPriority: windowState,
							});
							if (!newWindowState) return;
							setWindowState(newWindowState);
						}}
					>
						<div className={styles.imageWrapper}>
							<Image
								className="no_click"
								src={video.thumbnail}
								alt="icon"
								width="100%"
								height="100%"
								layout="responsive"
								objectFit="contain"
							/>
						</div>
						<p className="no_click">
							{video.filename}.{video.format}
						</p>
					</div>
				))}
			</div>
		);
	};

	return (
		<>
			<Head>
				<title>Zulfikar - Three Cheers for Sweet Revenge</title>
				<link
					rel="canonical"
					href="https://zulfikar-desktop.web.app/explorer/music/my-chemical-romance/three-cheers-for-sweet-revenge"
				/>

				{/* Description */}
				<meta
					name="description"
					content="Three Cheers for Sweet Revenge"
				/>

				{/* OpenGraph */}
				<meta property="og:title" content="Zulfikar - Three Cheers for Sweet Revenge" />
				<meta
					property="og:url"
					content="https://zulfikar-desktop.web.app/explorer/music/my-chemical-romance/three-cheers-for-sweet-revenge"
				/>
				<meta
					property="og:description"
					content="Three Cheers for Sweet Revenge"
				/>
			</Head>
			<div style={{ height: '100%' }}>
				{openVideo && (
					<MediaPlayer
						closeMedia={setOpenVideo}
						media={openVideo}
						component={
							<video
								controls
								autoPlay
								src={openVideo.secure_url}
								style={{ width: '100%', height: '100%' }}
							/>
						}
					/>
				)}
				<FileExplorer
					folder="Three Cheers for Sweet Revenge"
					topNav={false}
					icon="music"
					component={<VideoContent />}
				/>
				<Icons />
			</div>
		</>
	);
}

interface CloudinaryImage {
    asset_id: string;
    public_id: string;
    format: string;
    version: number;
    resource_type: string;
    type: string;
    created_at: string;
    bytes: number;
    width: number;
    height: number;
    folder: string;
    url: string;
    secure_url: string;
}

export async function getStaticProps() {
	const res = await fetch(
		`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/video?max_results=100`,
		{
			headers: {
				Authorization: `Basic ${Buffer.from(
					process.env.CLOUDINARY_API_KEY +
						':' +
						process.env.CLOUDINARY_API_SECRET
				).toString('base64')}}`,
			},
		}
	).then((res) => res.json());

	const data = res.resources
        .filter((image: CloudinaryImage) => image.folder === 'Music/Three Cheers for Sweet Revenge')
        .map((image: CloudinaryImage) => {
            return {
                url: image.secure_url.replace('/upload/', '/upload/q_auto:low/'),
                secure_url: image.secure_url,
                thumbnail: (
                    image.secure_url.split('.').slice(0, -1).join('.') + '.webp'
                ).replace('/upload/', '/upload/q_auto:low/'),
                filename: image.public_id.replace('Music/Three Cheers for Sweet Revenge/', ''),
                format: "flac",
            };
        })
        .sort((a: MediaType, b: MediaType) => {
            // Extract the numbers from filenames and sort in ascending order
            const numA = parseInt(a.filename.split('.')[0], 10);
            const numB = parseInt(b.filename.split('.')[0], 10);
            return numA - numB;
        });

	if (!data) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			data,
		},
		revalidate: 10,
	};
}

export default Videos;