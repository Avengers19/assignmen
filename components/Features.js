import Image from "next/image";
import styles from "./styles.css";

export default function Features() {
  return (
    <section className={styles.features}>
      <h2>Our Features</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <Image
            src="/assets/feature1.jpg"
            alt="Feature 1"
            width={300}
            height={200}
          />
          <h3>Feature One</h3>
          <p>Amazing feature to enhance your productivity.</p>
        </div>
        <div className={styles.card}>
          <Image
            src="/assets/feature2.jpg"
            alt="Feature 2"
            width={300}
            height={200}
          />
          <h3>Feature Two</h3>
          <p>Secure and reliable solutions for all your needs.</p>
        </div>
        <div className={styles.card}>
          <Image
            src="/assets/feature3.jpg"
            alt="Feature 3"
            width={300}
            height={200}
          />
          <h3>Feature Three</h3>
          <p>Innovative tools designed for modern challenges.</p>
        </div>
      </div>
    </section>
  );
}
