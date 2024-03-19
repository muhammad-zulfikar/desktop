import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Icons from '../../../../components/modules/Icons/Icons';
import FileExplorer from '../../../../components/windows/FileExplorer/FileExplorer';
import styles from '../../../../styles/utils/List.module.css';

function Parade() {
    const audios = [
        {
            type: 'file',
            name: "01. The End..flac",
            icon: '/icons/albums/the_black_parade.png',
            alt: 'AUDIO',
            link: "https://drive.google.com/uc?export=download&id=1yjhL_acjXYY1abEjO4hw8hbBkMg08-Qd",
            lastModified: "2023-04-17",
            size: "24M"
        },
        {
            type: 'file',
            name: "02. Dead!..flac",
            icon: '/icons/albums/the_black_parade.png',
            alt: 'AUDIO',
            link: "https://drive.google.com/uc?export=download&id=1rCvDwM_nbJGrLMpWWq37oBY1yW7oJuIk",
            lastModified: "2023-04-17",
            size: "42M"
        },
        {
            type: 'file',
            name: "03. This Is How I Disappear.flac",
            icon: '/icons/albums/the_black_parade.png',
            alt: 'AUDIO',
            link: "https://drive.google.com/uc?export=download&id=1J8HPw8KMmCkpjAuJGXyL4fKM1CSserJj",
            lastModified: "2023-04-17",
            size: "50M"
        },
        {
            type: 'file',
            name: "04. The Sharpest Lives.flac",
            icon: '/icons/albums/the_black_parade.png',
            alt: 'AUDIO',
            link: "https://drive.google.com/uc?export=download&id=19P7NH7UJL01WD0WxXrydsGcg7NZYub5r",
            lastModified: "2023-04-17",
            size: "41M"
        },
        {
            type: 'file',
            name: "05. Welcome to the Black Parade.flac",
            icon: '/icons/albums/the_black_parade.png',
            alt: 'AUDIO',
            link: "https://drive.google.com/uc?export=download&id=1c7ygHgcJd8WBvoX0VdxL8kZiHIHoCh7I",
            lastModified: "2023-04-17",
            size: "64M"
        },
        {
            type: 'file',
            name: "06. I Don't Love You.flac",
            icon: '/icons/albums/the_black_parade.png',
            alt: 'AUDIO',
            link: "https://drive.google.com/uc?export=download&id=1XFykDcFajmMCLu5qJIQj7UEhmPpMiJy9",
            lastModified: "2023-04-17",
            size: "48M"
        },
        {
            type: 'file',
            name: "07. House of Wolves.flac",
            icon: '/icons/albums/the_black_parade.png',
            alt: 'AUDIO',
            link: "https://drive.google.com/uc?export=download&id=1QiBYV9dTUAMCEDiqpWgNoeAgJCzv9AlU",
            lastModified: "2023-04-17",
            size: "38M"
        },
        {
            type: 'file',
            name: "08. Cancer.flac",
            icon: '/icons/albums/the_black_parade.png',
            alt: 'AUDIO',
            link: "https://drive.google.com/uc?export=download&id=12xM6pKl7SCr3vaLtFfRxZle_pNEgsEPZ",
            lastModified: "2023-04-17",
            size: "28M"
        },
        {
            type: 'file',
            name: "09. Mama.flac",
            icon: '/icons/albums/the_black_parade.png',
            alt: 'AUDIO',
            link: "https://drive.google.com/uc?export=download&id=14Fw5lUeO_wmnmc3qN8kdybbuZmJmtEmF",
            lastModified: "2023-04-17",
            size: "56M"
        },
        {
            type: 'file',
            name: "10. Sleep.flac",
            icon: '/icons/albums/the_black_parade.png',
            alt: 'AUDIO',
            link: "https://drive.google.com/uc?export=download&id=1CrOclYK4KunbWmgo37QzDxb-3mi0MdJp",
            lastModified: "2023-04-17",
            size: "57M"
        },
        {
            type: 'file',
            name: "11. Teenagers.flac",
            icon: '/icons/albums/the_black_parade.png',
            alt: 'AUDIO',
            link: "https://drive.google.com/uc?export=download&id=1HPwmKGZHZK4Hvu_vUCN2y8vWtU7kZmhB",
            lastModified: "2023-04-17",
            size: "33M"
        },
        {
            type: 'file',
            name: "12. Disenchanted.flac",
            icon: '/icons/albums/the_black_parade.png',
            alt: 'AUDIO',
            link: "https://drive.google.com/uc?export=download&id=1x6oTsWTGssnoac83xE96WwEvSo61BECZ",
            lastModified: "2023-04-17",
            size: "61M"
        },
        {
            type: 'file',
            name: "13. Famous Last Words.flac",
            icon: '/icons/albums/the_black_parade.png',
            alt: 'AUDIO',
            link: "https://drive.google.com/uc?export=download&id=1NmrWsJKdA65jDxd21zgiw9JvaWxK6Nfq",
            lastModified: "2023-04-17",
            size: "62M"
        },
        {
            type: 'file',
            name: "14. Blood (Hidden Track).flac",
            icon: '/icons/albums/the_black_parade.png',
            alt: 'AUDIO',
            link: "https://drive.google.com/uc?export=download&id=1wvM7_lg6Ms8ninKOq-8o3hktu_mRNG4Y",
            lastModified: "2023-04-17",
            size: "13M"
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
                                <p className={styles.listItemType}>Audio</p>
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
                <title>Zulfikar - The Black Parade</title>
                <link
                    rel="canonical"
                    href="https://zulfikar-desktop.web.app/explorer/music/the-black-parade"
                />
                {/* Other metadata */}
            </Head>
            <div style={{ height: '100%' }}>
                <FileExplorer
                    folder="The Black Parade"
                    topNav={true}
                    icon="music"
                    component={content()}
                />
                <Icons />
            </div>
        </>
    );
}

export default Parade;
