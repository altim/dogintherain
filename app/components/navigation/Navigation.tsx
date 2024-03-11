import styles from "./Navigation.module.scss";
import Link from "next/link";
export default function Navigation() {
  return (
    <>
      <div className={styles.navigationWrapper}>
        <div className={styles.navigationInner}>
          <Link href={"/"}>DogInTheRain</Link>
          <Link href={"/biy"}>Buy DogInTheRain</Link>
          <div className={styles.socialLinks}>
            <div>
              <p>Vibe with us:</p>
            </div>
            <Link href={"https://twitter.com/home"} target={"_blank"}>
              Twitter
            </Link>
            <Link href={"/https://web.telegram.org/a/"} target={"_blank"}>
              Telegram
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
