import styles from "./layout.module.css";
import Head from "next/head";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Stan";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="learn how to build a personal website using NextJs"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0fontSize=75px&iamges=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
            <>
            <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt="smth smth here" 
            />
            <h1 className={utilStyles.heading2X1}>{name}</h1>
            </>
        ) : (<>
            <Link href="/">
                <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt="smth smth here"
                />
                <h2 className={utilStyles.headingLg}>
                    <a><Link href="/" className={utilStyles.colorInherit}>
                        {name}
                    
                    </Link></a>

                </h2>
            </Link>
        </>)}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
            <Link href="/"> - Back to home</Link>
            </div>
      )}
    </div>
  );
}
