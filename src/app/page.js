import Image from "next/image";
import styles from "./page.module.css";
import bgimage from "./assets/header-bg.jpg";
import Button from "./components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section>
          <div className={styles.header}>
            <Image
              src={bgimage}
              alt="Header Background"
              placeholder="blur"
              quality={100}
              fill
              priority
              sizes="100vw"
              style={{
                objectFit: "cover",
              }}
            />
            <div className={styles.textbox}>
              <div className="container mx-auto">
                <div className={styles.textboxInner}>
                  <h1 className="mb-4 text-6xl font-bold">Delivering Exceptional Service.</h1>
                  <p className={styles.p}>
                    <strong>
                      Fast, Reliable Computer Repairs in Te Atatu Peninsula
                    </strong>
                    <br />
                    <strong>
                      Your Local Experts for PCs, Laptops & More
                    </strong>{" "}
                    <br />
                    From hardware fixes to software solutions, we&apos;re here
                    to get your devices back in top shape. Friendly, affordable
                    service right in your neighborhood!
                  </p>
                  <Link href="/contact">
                    <Button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Get a Quote Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto mb-16">
          <h1 className="text-center text-3xl font-bold mb-4">Services we Offer</h1>
          <div className="text-center mb-4 flex flex-row flex-wrap justify-center">
            <div className="max-w-xs p-4 text-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                width="6rem"
                className="mx-auto mb-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                />
              </svg>
              <h2 className="text-xl font-bold mb-2">Computer Repair/Upgrades</h2>
              <p>
                We can fix anything from a broken screen to a software issue, or
                upgrade your computer&apos;s parts and optimise Windows to get
                your PC running like new again.
              </p>
            </div>
            <div className="max-w-xs p-4 text-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                width="6rem"
                className="mx-auto mb-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
                />
              </svg>

              <h2 className="text-xl font-bold mb-2">Desktop PC Building</h2>
              <p>
                We&apos;ll help you pick the parts and build a custom gaming or
                workstation PC for you.
              </p>
            </div>
            <div className="max-w-xs p-4 text-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                width="6rem"
                className="mx-auto mb-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>

              <h2 className="text-xl font-bold mb-2">Remote Access Support</h2>
              <p>
                We can remotely connect to your computer and fix
                software/operating system related issues from the comfort of
                your own home.
              </p>
            </div>
            <div className="max-w-xs p-4 text-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                width="6rem"
                className="mx-auto mb-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>

              <h2 className="text-xl font-bold mb-2">Web Development</h2>
              <p>
                We can develop a fast, modern and secure website for your
                business using Wordpress or custom React/NextJS code.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
