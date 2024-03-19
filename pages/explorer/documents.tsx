import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Icons from '../../components/modules/Icons/Icons';
import FileExplorer from '../../components/windows/FileExplorer/FileExplorer';
import styles from '../../styles/utils/List.module.css';

function Documents() {
	const content = () => {
		return (
			<>
				<div className={styles.listItemContainer}>
					<Link href="/notepad/about" passHref>
						<div className={styles.listItem}>
							<div className={styles.listItemName}>
								<Image
									src="/icons/notes/notes.png"
									alt="icon"
									width={16}
									height={16}
								></Image>
								<p>About me.txt</p>
							</div>
							<p className={styles.listItemDateModified}>
								30.12.2021 04:02
							</p>
							<p className={styles.listItemType}>Text Document</p>
							<p className={styles.listItemSize}>2kb</p>
						</div>
					</Link>
					<Link href="/explorer/documents/projects" passHref>
						<div className={styles.listItem}>
							<div className={styles.listItemName}>
								<Image
									src="/icons/folder/folder.png"
									alt="icon"
									width={16}
									height={16}
								></Image>
								<p>Projects</p>
							</div>
							<p className={styles.listItemDateModified}>
								30.12.2021 04:02
							</p>
							<p className={styles.listItemType}>Folder</p>
							<p className={styles.listItemSize}>2kb</p>
						</div>
					</Link>
				</div>
			</>
		);
	};

	return (
		<>
			<Head>
				<title>Zulfikar - Documents</title>
				<link
					rel="canonical"
					href="https://zulfikar-desktop.web.app/explorer/documents"
				/>

				{/* Description */}
				<meta
					name="description"
					content="Who uses this folder? Maybe I should write 100 reasons why I don't use Linux as my primary OS here."
				/>

				{/* OpenGraph */}
				<meta property="og:title" content="Zulfikar - Documents" />
				<meta
					property="og:url"
					content="https://zulfikar-desktop.web.app/explorer/documents"
				/>
				<meta
					property="og:description"
					content="Who uses this folder? Maybe I should write 100 reasons why I don't use Linux as my primary OS here."
				/>
			</Head>
			<div style={{ height: '100%' }}>
				<FileExplorer
					folder="Documents"
					topNav={true}
					icon="documents"
					component={content()}
				/>
				<Icons />
			</div>
		</>
	);
}

export default Documents;
