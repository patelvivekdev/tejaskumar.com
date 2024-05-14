import fs from "fs";
import path from "path";
import names from "@/util/tej-variants";
import Hero from "@/components/Hero";
// import ReactPlayer from "react-player";
import Card from "@/components/Card";
import SectionHeading from "@/components/SectionHeading";
import { title } from "case";
import styles from "@/styles/home.module.css";
import Link from "next/link";
import { getInitialBlogPosts } from "@/util/getInitialBlogPosts";
import { talks } from "@/util/talks";
import ReactVideoPlayer from "@/components/ReactPlayer";

// force dynamic
export const dynamic = "force-dynamic";

const numberOfTejass = fs
  .readdirSync(path.resolve("./public/tejass/"))
  .filter(entry => entry.endsWith(".png")).length;

const name = names[Math.floor(Math.random() * names.length)];

export default async function Home() {
    const { posts } = await getInitialBlogPosts()
    let firstPost = posts[0]
  return (
    <div>
      <Hero name={name} numberOfTejass={numberOfTejass} />
      <div className={styles.sectionContainer}>
        <section className={styles.section}>
          <SectionHeading>Most Recent Talk</SectionHeading>
          <div className={styles.mostRecentTalkContainer}>
            <ReactVideoPlayer url={talks[0].url} />
          </div>
          <Link href={`/talks`}>
            <Card center>
              <strong>View All Talks &rarr;</strong>
            </Card>
          </Link>
        </section>
        {firstPost && (
          <section className={styles.section}>
            <SectionHeading>Latest From the Blog</SectionHeading>
            <div className={styles.blogList}>
              <Link
                href="/blog/[post]"
                as={`/blog/${firstPost.slug}`}
                key={firstPost.title}
              >
                <Card>
                  <h2>{title(firstPost.title)}&nbsp;&nbsp;👉🏾</h2>
                  <p>{firstPost.excerpt}</p>
                </Card>
              </Link>
              <Link href={`/blog`}>
                <Card center>
                  <h2>MOAR BLOG POSTS</h2>
                </Card>
              </Link>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
