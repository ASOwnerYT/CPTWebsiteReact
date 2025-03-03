import styles from "./HeaderSm.module.css";
import Image from "next/image";
import bgimage from "../assets/header-bg.jpg";

export default function HeaderSm({ text }) {
  return (
    <section>
      <div className={styles.header}>
        <Image
          src={bgimage}
          alt="Header Background"
          placeholder="blur"
          quality={100}
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
        <div className={styles.textbox}>
          <div className="container mx-auto">
              <h1 className="text-4xl font-bold mt-8" >{text}</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
