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

function Pictures({ data }: { data: MediaType[] }) {
    const [openImage, setOpenImage] = useState<MediaType | null>(null);

    const DraggableWindowContext = useContext(Context);
    const [windowState, setWindowState] =
        DraggableWindowContext.windowPriorityState;

    const ImageContent = () => {
        return (
            <div className={styles.wrapper}>
                {data.map((image) => (
                    <div
                        className={`${styles.mediaItem} no_click`}
                        key={image.filename}
                        onClick={async () => {
                            setOpenImage(image);

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
                                src={image.url}
                                alt="icon"
                                width="100%"
                                height="100%"
                                layout="responsive"
                                objectFit="contain"
                            />
                        </div>
                        <p className="no_click">
                            {image.filename}.{image.format}
                        </p>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <>
            <Head>
                <title>Zulfikar - Desktop</title>
                <link
                    rel="canonical"
                    href="https://zulfikar-desktop.web.app/explorer/pictures/wallpapers/desktop"
                />

                {/* Description */}
                <meta
                    name="description"
                    content="Desktop Wallpapers"
                />

                {/* OpenGraph */}
                <meta property="og:title" content="Zulfikar - Pictures" />
                <meta
                    property="og:url"
                    content="https://zulfikar-desktop.web.app/explorer/pictures/wallpapers/desktop"
                />
                <meta
                    property="og:description"
                    content="Desktop Wallpapers"
                />
            </Head>
            <div style={{ height: '100%' }}>
                {openImage && (
                    <MediaPlayer
                        media={openImage}
                        closeMedia={setOpenImage}
                        component={
                            <Image
                                src={openImage.url}
                                alt="icon"
                                layout="fill"
                                objectFit="contain"
                            />
                        }
                    />
                )}
                <FileExplorer
                    folder="Pictures"
                    topNav={false}
                    icon="pictures"
                    component={<ImageContent />}
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
        `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image?max_results=100`,
        {
            headers: {
                Authorization: `Basic ${Buffer.from(
                    process.env.CLOUDINARY_API_KEY +
                    ':' +
                    process.env.CLOUDINARY_API_SECRET
                ).toString('base64')}`,
            },
        }
    ).then((res) => res.json());

    const data = res.resources
        .filter((image: CloudinaryImage) => image.folder === 'Pictures/Wallpapers/Desktop')
        .map((image: CloudinaryImage) => {
            return {
                url: image.secure_url.replace('/upload/', '/upload/q_auto:low/'),
                secure_url: image.secure_url,
                filename: image.public_id.replace('Pictures/Wallpapers/Desktop/', ''),
                format: image.format,
            };
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

export default Pictures;
