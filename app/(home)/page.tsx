import styles from "./page.module.scss";
import Image from "next/image";
import Button from "@/app/components/button/Button";
import classNames from "classnames";

export default function Home() {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.singleColumn}>
          <div className={styles.boxCentered}>
            <h1>Dog In The Rain</h1>
            <Image
              className={classNames("rounded", styles.responsiveImage)}
              src={"/assets/dog.jpg"}
              width={764}
              height={461}
              alt={"DogInTheRain"}
            />
            <Button id={"buy"} name={"Buy Doggy in the rain"} />
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.tripleColumn}>
          <div className={styles.fullWidth}>
            <div className={styles.boxCentered}>
              <h2>Let's make it $RAIN</h2>
            </div>
            <div className={styles.tripleColumn}>
              <div className={styles.boxCentered}>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div className={styles.boxCentered}>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
              <div className={styles.boxCentered}>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
