import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Icons from '../../components/modules/Icons/Icons';
import FileExplorer from '../../components/windows/FileExplorer/FileExplorer';
import styles from '../../styles/utils/List.module.css';

function Music() {
	const folderNames = [
		'My Chemical Romance',
	];

	const content = () => {
		return (
			<>
				<div className={styles.listItemContainer}>
					{folderNames.map((folderName, index) => (
						<Link key={index} href={`/explorer/music/${folderName.replace(/\s+/g, '-').toLowerCase()}`} passHref>
							<div className={styles.listItem}>
								<div className={styles.listItemName}>
									<Image
										src="/desktop/icons/folder/folder.png"
										alt="icon"
										width={16}
										height={16}
									></Image>
									<p>{folderName}</p>
								</div>
								<p className={styles.listItemDateModified}>
									30.12.2021 04:02
								</p>
								<p className={styles.listItemType}>Folder</p>
								<p className={styles.listItemSize}>2kb</p>
							</div>
						</Link>
					))}
				</div>
			</>
		);
	};
	return (
		<>
			<Head>
				<title>Zulfikar - Music</title>
				<link
					rel="canonical"
					href="https://zulfikar-desktop.web.app/explorer/music"
				/>

				{/* Description */}
				<meta
					name="description"
					content="I think this folder has some meme value?"
				/>

				{/* OpenGraph */}
				<meta property="og:title" content="Zulfikar - Music" />
				<meta
					property="og:url"
					content="https://zulfikar-desktop.web.app/explorer/music"
				/>
				<meta
					property="og:description"
					content="I think this folder has some meme value?"
				/>
			</Head>
			<div style={{ height: '100%' }}>
				<FileExplorer
					folder="Music" 
					topNav={true} 
					icon="music" 
					component={content()}
				/>
				<Icons />
			</div>
		</>
	);
}

export default Music;
