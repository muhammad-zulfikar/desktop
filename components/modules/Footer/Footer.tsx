import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineWifi } from 'react-icons/ai';
import { FiVolume2 } from 'react-icons/fi';
import { ErrorType } from '../../../typings';
import Error from '../../windows/Error/Error';
import styles from './Footer.module.css';
import WindowsMenu from './WindowsMenu';

function Footer() {
	const [winMenu, setWinMenu] = useState(false);
	const [errors, setError] = useState([] as ErrorType[]);

	const handleError = (err: string) => {
		setError([...errors, { error: err, index: errors.length }]);
	};

	const handleWinMenu = () => {
		setWinMenu(!winMenu);
	};

	const [hourStr, setHourStr] = useState('00:00 PM');
	const [dateStr, setDateStr] = useState('1/1/1970');

	useEffect(() => {
		let isMounted = true;
		setInterval(() => {
			if (typeof navigator !== 'undefined') {
				if (isMounted)
					setHourStr(
						new Date().toLocaleTimeString(navigator.language, {
							hour: '2-digit',
							minute: '2-digit',
						})
					);
				if (isMounted)
					setDateStr(
						new Date().toLocaleDateString(navigator.language)
					);
			}
		}, 1000);
		return () => {
			isMounted = false;
		};
	}, []);

	return (
		<>
			{errors &&
				errors.map((err, index) => {
					return (
						<Error
							key={err.index}
							error={err.error}
							errors={errors}
							setError={setError}
							index={err.index}
						/>
					);
				})}
			<div className={styles.container}>
				<section className={styles.iconContainer}>
					<div
						className={`${styles.icon} windowsIcon`}
						onClick={() => handleWinMenu()}
					>
						<Image
							src={'/desktop/icons/windows/windows.png'}
							width={25}
							height={25}
							alt="logo"
							className="windowsIcon"
						/>
					</div>
					<Link href="/terminal" passHref>
						<div className={styles.icon}>
							<Image
								src={'/desktop/icons/terminal/terminal.png'}
								width={25}
								height={25}
								alt="logo"
							/>
						</div>
					</Link>
					<Link href="/explorer/quick-access" passHref>
						<div className={styles.icon}>
							<Image
								src={'/desktop/icons/explorer/explorer.png'}
								width={25}
								height={25}
								alt="logo"
							/>
						</div>
					</Link>
					<div
						className={styles.icon}
						onClick={() => handleError('Chrome')}
					>
						<Image
							src={'/desktop/icons/chrome/chrome.png'}
							width={30}
							height={30}
							alt="logo"
						/>
					</div>
					<div
						className={styles.icon}
						onClick={() =>
							handleError('Visual Studio Code')
						}
					>
						<Image
							src={'/desktop/icons/vscode/vscode.png'}
							width={25}
							height={25}
							alt="logo"
						/>
					</div>
					<div
						className={styles.icon}
						onClick={() => handleError('Spotify')}
					>
						<Image
							src={'/desktop/icons/spotify/spotify.png'}
							width={27}
							height={27}
							alt="logo"
						/>
					</div>
				</section>
				<section className={styles.toolbarContainer}>
					<div className={styles.language}>
						<p>ENG</p>
					</div>
					<div className={styles.icon}>
						<AiOutlineWifi />
						<FiVolume2 />
					</div>
					<div className={styles.dateIcons}>
						<p>{hourStr}</p>
						<p>{dateStr}</p>
					</div>
				</section>
			</div>
			<WindowsMenu winMenu={winMenu} handleWinMenu={handleWinMenu} />
		</>
	);
}

export default Footer;