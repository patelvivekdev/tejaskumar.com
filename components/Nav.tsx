import Link from "next/link";
import React, { ReactNode } from "react";
import styles from "./Nav.module.css";
import A from "../components/A";

export default function Nav({
  children,
  ...rest
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
  children?: ReactNode;
}) {
  return (
    <nav {...rest} className={styles.nav}>
      <ul>
        <li>
          <Link href="/">
            {/* <A size={32} title="Home"> */}
            🧔🏾
            {/* </A> */}
          </Link>
        </li>
        <li>
          <Link href="/talks">
            {/* <A title="Talks"> */}
            TALKS
            {/* </A> */}
          </Link>
        </li>
        <li>
          <Link href="/blog">
            {/* <A title="Blog"> */}
            BLOG
            {/* </A> */}
          </Link>
        </li>
        <li>
          <A
            color="#38A1F3"
            target="_blank"
            href="https://twitter.com/tejaskumar_"
            rel="noopener"
          >
            TWITTER
          </A>
        </li>
        <li>
          <A target="_blank" href="https://github.com/tejasq" rel="noopener">
            GITHUB
          </A>
        </li>
      </ul>
    </nav>
  );
}
