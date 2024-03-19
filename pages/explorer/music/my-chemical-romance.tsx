import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Icons from '../../../components/modules/Icons/Icons';
import FileExplorer from '../../../components/windows/FileExplorer/FileExplorer';
import styles from '../../../styles/utils/List.module.css';

function MyChemicalRomance() {
	const subfolderNames = [
		'I Brought You My Bullets, You Brought Me Your Love',
		'Three Cheers for Sweet Revenge',
		'The Black Parade',
	];

	const content = () => {
		return (
			<>
				<div className={styles.listItemContainer}>
					{subfolderNames.map((subfolderName, index) => (
						<Link key={index} href={`/explorer/music/my-chemical-romance/${subfolderName.replace(/\s+/g, '-').toLowerCase()}`} passHref>
							<div className={styles.listItem}>
								<div className={styles.listItemName}>
									<Image
										src="/desktop/icons/folder/folder.png"
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
				<title>Zulfikar - My Chemical Romance</title>
				<link
					rel="canonical"
					href="https://zulfikar-desktop.web.app/explorer/music/my-chemical-romance"
				/>

				{/* Description */}
				<meta
					name="description"
					content="Explore the albums of My Chemical Romance."
				/>

				{/* OpenGraph */}
				<meta property="og:title" content="Zulfikar - My Chemical Romance" />
				<meta
					property="og:url"
					content="https://zulfikar-desktop.web.app/explorer/music/my-chemical-romance"
				/>
				<meta
					property="og:description"
					content="Explore the albums of My Chemical Romance."
				/>
			</Head>
			<div style={{ height: '100%' }}>
				<FileExplorer
					folder="My Chemical Romance" 
					topNav={true} 
					icon="music" 
					component={content()}
				/>
				<Icons />
			</div>
		</>
	);
}

export default MyChemicalRomance;
