import Head from "next/head";
import styles from "../styles/Home.module.css";
import { attributes, react as HomeContent } from "../content/home.md";

export default function Home() {
	console.log(attributes);
	const { title, cats } = attributes;
	return (
		<div className={styles.container}>
			<Head>
				<title>Netlify CMS</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<div>
					<h2>{title}</h2>
					<ul>
						{cats.map((cat, i) => (
							<li key={i}>{cat.name}</li>
						))}
					</ul>
					<HomeContent />
				</div>
			</main>
		</div>
	);
}
