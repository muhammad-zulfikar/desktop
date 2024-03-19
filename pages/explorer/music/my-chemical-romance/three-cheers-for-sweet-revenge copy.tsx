import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Icons from '../../../../components/modules/Icons/Icons';
import FileExplorer from '../../../../components/windows/FileExplorer/FileExplorer';
import styles from '../../../../styles/utils/List.module.css';

function Revenge() {
  const audios = [
    {
      type: 'file',
      name: "01. Helena.flac",
      icon: '/icons/albums/three_cheers_for_sweet_revenge.png',
      alt: 'AUDIO',
      link: 'https://drive.google.com/uc?export=download&id=1bqfCRzvcEw0OY3elVPC8alHTAtuge743',
      lastModified: "2023-04-21",
      size: "42M"
    },
    {
      type: 'file',
      name: "02. Give 'Em Hell, Kid.flac",
      icon: '/icons/albums/three_cheers_for_sweet_revenge.png',
      alt: 'AUDIO',
      link: "https://drive.google.com/uc?export=download&id=17-hQYsfi3s6mLhMLRpU2yGs2AMGYjXeX",
      lastModified: "2023-04-21",
      size: "50M"
    },
    {
      type: 'file',
      name: "03. To the End.flac",
      icon: '/icons/albums/three_cheers_for_sweet_revenge.png',
      alt: 'AUDIO',
      link: "https://drive.google.com/uc?export=download&id=1oMTYEG7bLq5_lF4JnTgnHrR9fnoqZ5wZ",
      lastModified: "2023-04-21",
      size: "38M"
    },
    {
      type: 'file',
      name: "04. You Know What They Do to Guys Like Us in Prison.flac",
      icon: '/icons/albums/three_cheers_for_sweet_revenge.png',
      alt: 'AUDIO',
      link: "https://drive.google.com/uc?export=download&id=1ODb7yEIPa3dpuu-wy8F8HM7nnB-3ZJNf",
      lastModified: "2023-04-21",
      size: "36M"
    },
    {
      type: 'file',
      name: "05. I'm Not Okay (I Promise).flac",
      icon: '/icons/albums/three_cheers_for_sweet_revenge.png',
      alt: 'AUDIO',
      link: "https://drive.google.com/uc?export=download&id=1HkHD7OX2JfaZnR3SpcLjmG3dmi8PaiHc",
      lastModified: "2023-04-21",
      size: "39M"
    },
    {
      type: 'file',
      name: "06. The Ghost of You.flac",
      icon: '/icons/albums/three_cheers_for_sweet_revenge.png',
      alt: 'AUDIO',
      link: "https://drive.google.com/uc?export=download&id=1zj7IkeTFtZR6Nk25zbSXIamWtO2Qs7Nl",
      lastModified: "2023-04-21",
      size: "41M"
    },
    {
      type: 'file',
      name: "07. The Jetset Life Is Gonna Kill You.flac",
      icon: '/icons/albums/three_cheers_for_sweet_revenge.png',
      alt: 'AUDIO',
      link: "https://drive.google.com/uc?export=download&id=1chWw48SOs8ZhjbC6NQbXSMavG544cD_c",
      lastModified: "2023-04-21",
      size: "45M"
    },
    {
      type: 'file',
      name: "08. Interlude.flac",
      icon: '/icons/albums/three_cheers_for_sweet_revenge.png',
      alt: 'AUDIO',
      link: "https://drive.google.com/uc?export=download&id=1dVKyV16-YyWRkqD1g9mBUtyFNJUDtYMd",
      lastModified: "2023-04-21",
      size: "9.5M"
    },
    {
      type: 'file',
      name: "09. Thank You for the Venom.flac",
      icon: '/icons/albums/three_cheers_for_sweet_revenge.png',
      alt: 'AUDIO',
      link: "https://drive.google.com/uc?export=download&id=1_VjYwsPfZnKIX-JGfxjgs8zIHUG93UK6",
      lastModified: "2023-04-21",
      size: "46M"
    },
    {
      type: 'file',
      name: "10. Hang 'Em High.flac",
      icon: '/icons/albums/three_cheers_for_sweet_revenge.png',
      alt: 'AUDIO',
      link: "https://drive.google.com/uc?export=download&id=1sT4hMU2bFLnfChhrVAJ_to4u5DctmmMX",
      lastModified: "2023-04-21",
      size: "35M"
    },
    {
      type: 'file',
      name: "11. It's Not a Fashion Statement, It's a Deathwish.flac",
      icon: '/icons/albums/three_cheers_for_sweet_revenge.png',
      alt: 'AUDIO',
      link: "https://drive.google.com/uc?export=download&id=1wDXNrbxj926pUOml8xMTcWbBAcNx1pS8",
      lastModified: "2023-04-21",
      size: "44M"
    },
    {
      type: 'file',
      name: "12. Cemetery Drive.flac",
      icon: '/icons/albums/three_cheers_for_sweet_revenge.png',
      alt: 'AUDIO',
      link: "https://drive.google.com/uc?export=download&id=1Z_H_BayTzcIK5B9ZTmiaoKwAObpKpb18",
      lastModified: "2023-04-21",
      size: "38M"
    },
    {
      type: 'file',
      name: "13. I Never Told You What I Do for a Living.flac",
      icon: '/icons/albums/three_cheers_for_sweet_revenge.png',
      alt: 'AUDIO',
      link: "https://drive.google.com/uc?export=download&id=1v5rn7J26Dm6hCil3vy-pHDMQ72KnS1Wg",
      lastModified: "2023-04-21",
      size: "48M"
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
        <title>Zulfikar - Three Cheers for Sweet Revenge</title>
        <link
          rel="canonical"
          href="https://zulfikar-desktop.web.app/explorer/music/three-cheers-for-sweet-revenge"
        />
        {/* Other metadata */}
      </Head>
      <div style={{ height: '100%' }}>
        <FileExplorer
          folder="Three Cheers for Sweet Revenge"
          topNav={true}
          icon="music"
          component={content()}
        />
        <Icons />
      </div>
    </>
  );
}

export default Revenge;
