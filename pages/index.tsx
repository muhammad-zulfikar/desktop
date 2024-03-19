import Head from 'next/head';
import Icons from '../components/modules/Icons/Icons';

export default function Home() {
	return (
		<>
			<Head>
				<title>Zulfikar</title>
				<link rel="canonical" href="https://zulfikar-desktop.web.app" />

				{/* Description */}
				<meta
					name="description"
					content="Zulfikar's personal website."
				/>

				{/* OpenGraph */}
				<meta property="og:title" content="Zulfikar" />
				<meta property="og:url" content="https://zulfikar-desktop.web.app" />
				<meta
					property="og:description"
					content="Zulfikar's personal website."
				/>
			</Head>
			<div style={{ height: '100%' }}>
				<Icons />
			</div>
		</>
	);
}
