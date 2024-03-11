import styles from "./page.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.columnCentered}>
          <h1>Dog In The Rain</h1>
          <Image
            src={"/assets/dog.jpg"}
            width={764}
            height={461}
            alt={"DogInTheRain"}
          />
        </div>
      </div>
    </>
  );
}
