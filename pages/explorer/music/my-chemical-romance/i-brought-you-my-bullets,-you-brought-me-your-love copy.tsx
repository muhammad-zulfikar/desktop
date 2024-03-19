import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Icons from '../../../../components/modules/Icons/Icons';
import FileExplorer from '../../../../components/windows/FileExplorer/FileExplorer';
import styles from '../../../../styles/utils/List.module.css';

function Bullets() {
	const audios = [
		{
            type: 'file',
            name: "01. Romance.flac",
            icon: '/icons/albums/i_brought_you_my_bullets,_you_brought_me_your_love.png',
            alt: 'AUDIO',
            link: "https://drive.google.com/uc?export=download&id=1eT_BoFffGUmINPmmnoSoZ__wCd59eJU5",
            lastModified: "2023-12-23",
            size: "18M"
          },
          {
            type: 'file',
            name: "02. Honey, This Mirror isn't Big Enough for the Two of Us.flac",
            icon: '/icons/albums/i_brought_you_my_bullets,_you_brought_me_your_love.png',
            alt: 'AUDIO',
            link: "https://drive.google.com/uc?export=download&id=1lxLY8R4vPgRIDqjdTjvR_ovBeENliqAM",
            lastModified: "2023-12-23",
            size: "86M"
          },
          {
            type: 'file',
            name: "03. Vampires Will Never Hurt You.flac",
            icon: '/icons/albums/i_brought_you_my_bullets,_you_brought_me_your_love.png',
            alt: 'AUDIO',
            link: "https://drive.google.com/uc?export=download&id=1OP_XJEN4X9ZIy6LctCoqEHpzTi22BDOM",
            lastModified: "2023-12-23",
            size: "120M"
          },
          {
            type: 'file',
            name: "04. Drowning Lesson.flac",
            icon: '/icons/albums/i_brought_you_my_bullets,_you_brought_me_your_love.png',
            alt: 'AUDIO',
            link: "https://drive.google.com/uc?export=download&id=1xg5oyf1tkJu7yzIR-P1zS6zVfpljEKGD",
            lastModified: "2023-12-23",
            size: "96M"
          },
          {
            type: 'file',
            name: "05. Our Lady of Sorrows.flac",
            icon: '/icons/albums/i_brought_you_my_bullets,_you_brought_me_your_love.png',
            alt: 'AUDIO',
            link: "https://drive.google.com/uc?export=download&id=1JTI_QuNKdj3AQQFWEwkVT9A2xKXfqPRC",
            lastModified: "2023-12-23",
            size: "47M"
          },
          {
            type: 'file',
            name: "06. Headfirst for Halos.flac",
            icon: '/icons/albums/i_brought_you_my_bullets,_you_brought_me_your_love.png',
            alt: 'AUDIO',
            link: "https://drive.google.com/uc?export=download&id=1a_AWiw9hM_vRLzTbZUW1gFV-clM66izl",
            lastModified: "2023-12-23",
            size: "78M"
          },
          {
            type: 'file',
            name: "07. Skylines and Turnstiles.flac",
            icon: '/icons/albums/i_brought_you_my_bullets,_you_brought_me_your_love.png',
            alt: 'AUDIO',
            link: "https://drive.google.com/uc?export=download&id=1ulYau4nYDH0f3Jzz2HbOTxC1u6vEyKFA",
            lastModified: "2023-12-23",
            size: "75M"
          },
          {
            type: 'file',
            name: "08. Early Sunsets Over Monroeville.flac",
            icon: '/icons/albums/i_brought_you_my_bullets,_you_brought_me_your_love.png',
            alt: 'AUDIO',
            link: "https://drive.google.com/uc?export=download&id=1awV-pVCY2nGxUL9y2Eh2qE-ENlW9GDdi",
            lastModified: "2023-12-23",
            size: "108M"
          },
          {
            type: 'file',
            name: "09. This Is the Best Day Ever.flac",
            icon: '/icons/albums/i_brought_you_my_bullets,_you_brought_me_your_love.png',
            alt: 'AUDIO',
            link: "https://drive.google.com/uc?export=download&id=1dgHhW-NdodADI2MYE7NWDuZE0mHPO_97",
            lastModified: "2023-12-23",
            size: "50M"
          },
          {
            type: 'file',
            name: "10. Cubicles.flac",
            icon: '/icons/albums/i_brought_you_my_bullets,_you_brought_me_your_love.png',
            alt: 'AUDIO',
            link: "https://drive.google.com/uc?export=download&id=12plPnrnAh8jW6nVexK9NdgllMjINoccg",
            lastModified: "2023-12-23",
            size: "84M"
          },
          {
            type: 'file',
            name: "11. Demolition Lovers.flac",
            icon: '/icons/albums/i_brought_you_my_bullets,_you_brought_me_your_love.png',
            alt: 'AUDIO',
            link: "https://drive.google.com/uc?export=download&id=1XREz4Qn7kxIVjmsj2LH9N8MG29_-P27S",
            lastModified: "2023-12-23",
            size: "129M"
          }
        ];

	const content = () => {
		return (
			<>
				<div className={styles.listItemContainer}>
					{audios.map((audio, index) => (
						<Link href={audio.link} passHref key={index}>
							<div className={styles.listItem}>
								<div className={styles.listItemName}>
									<Image
										src={audio.icon}
										alt={audio.alt}
										width={16}
										height={16}
									/>
									<p>{audio.name}</p>
								</div>
								<p className={styles.listItemDateModified}>
									{audio.lastModified}
								</p>
								<p className={styles.listItemType}>audio</p>
								<p className={styles.listItemSize}>{audio.size}</p>
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
				<title>Zulfikar - I Brought You My Bullets, You Brought Me Your Love</title>
				<link
					rel="canonical"
					href="https://zulfikar-desktop.web.app/explorer/music/i-brought-you-my-bullets,-you-brought-me-your-love"
				/>
				{/* Other metadata */}
			</Head>
			<div style={{ height: '100%' }}>
				<FileExplorer
					folder="I Brought You My Bullets, You Brought Me Your Love"
					topNav={true}
					icon="music"
					component={content()}
				/>
				<Icons />
			</div>
		</>
	);
}

export default Bullets;
