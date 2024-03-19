import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Icons from '../../components/modules/Icons/Icons';
import FileExplorer from '../../components/windows/FileExplorer/FileExplorer';
import styles from '../../styles/utils/List.module.css';

function Pictures() {
	const subfolderNames = [
		'Wallpapers',
	];

	const content = () => {
		return (
			<>
				<div className={styles.listItemContainer}>
					{subfolderNames.map((subfolderName, index) => (
						<Link key={index} href={`/explorer/pictures/${subfolderName.replace(/\s+/g, '-').toLowerCase()}`} passHref>
							<div className={styles.listItem}>
								<div className={styles.listItemName}>
									<Image
										src="/icons/folder/folder.png"
										alt="icon"
										width={16}
										height={16}
									></Image>
									<p>{subfolderName}</p>
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
				<title>Zulfikar - Pictures</title>
				<link
					rel="canonical"
					href="https://www.kassq.dev/explorer/music/MyChemicalRomance"
				/>

				{/* Description */}
				<meta
					name="description"
					content="Explore the albums of My Chemical Romance."
				/>

				{/* OpenGraph */}
				<meta property="og:title" content="Zulfikar - Pictures" />
				<meta
					property="og:url"
					content="https://www.kassq.dev/explorer/music/MyChemicalRomance"
				/>
				<meta
					property="og:description"
					content="Explore the albums of My Chemical Romance."
				/>
			</Head>
			<div style={{ height: '100%' }}>
				<FileExplorer
					folder="Pictures" 
					topNav={true} 
					icon="pictures" 
					component={content()}
				/>
				<Icons />
			</div>
		</>
	);
}

export default Pictures;