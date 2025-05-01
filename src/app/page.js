import Image from "next/image";
import styles from "./page.module.css";
import bgimage from "./assets/header-bg.jpg";
import bgimage2 from "./assets/pexels-divinetechygirl-1181263.jpg";
import bgimage3 from "./assets/pexels-markusspiske-2004161.jpg";
import bgimage4 from "./assets/pexels-realtoughcandy-11035547.jpg";
import Button from "./components/Button";
import Link from "next/link";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <div>
      <Carousel images={[bgimage, bgimage2, bgimage3, bgimage4]} />
      <main>
        <section className="container mx-auto mb-16">
          <h1 className="text-center text-3xl font-bold mb-8">
            Learn Programming Languages
          </h1>
          <div className="text-center mb-4 flex flex-row flex-wrap justify-center">
            <div className="max-w-xs p-4 text-center justify-center">
              <svg
                fill="#000000"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                width="6rem"
                className="mx-auto mb-4"
              >
                <path d="M11.406 11.312c-.78-.123-1.198-.654-.99-2.295l.023-.198c.175-1.426.321-1.743.996-1.706.198.013.426.14.654.33.211.247.68.568.945 1.204.19.466.254.77.281 1.098l.042.402v-.002a.68.68 0 0 0 1.342-.007c.008-.044.176-4.365.176-4.436 0-.38-.302-.69-.68-.696a.685.685 0 0 0-.682.688c0 .009-.001.605-.014 1.206-.536-.592-1.223-1.123-1.994-1.17-2.058-.11-2.283 1.811-2.419 2.918l-.02.196c-.278 2.189.441 3.569 2.13 3.837 1.838.293 3.063.72 3.074 1.868.007.446-.224.903-.627 1.254a2.163 2.163 0 0 1-1.749.507 3.233 3.233 0 0 1-.539-.141c-.24-.136-.847-.51-1.154-.942-.26-.364-.35-.937-.378-1.3.004-.163.005-.27.005-.283a.69.69 0 0 0-.669-.703.689.689 0 0 0-.696.682c0 .013-.017 1.367-.066 2.183-.07 1.313 0 2.426 0 2.474.028.382.35.67.727.644a.681.681 0 0 0 .635-.733c0-.006-.033-.545-.029-1.29a5.21 5.21 0 0 0 1.938.773 3.451 3.451 0 0 0 2.856-.82c.713-.619 1.122-1.464 1.11-2.32-.024-2.555-2.865-3.004-4.228-3.222M14.174 0a5.51 5.51 0 0 0-2.724.723h-.112c-2.637 0-4.937 1.392-6.15 3.728-.728 1.393-.9 2.75-.999 3.579-.012.089-.018.17-.028.262-.12.974-.123 1.904-.01 2.772a5.824 5.824 0 0 0-.625 2.529v.016a58.919 58.919 0 0 1-.057 1.95 29.72 29.72 0 0 0-.008 2.94l.013.209C3.698 21.676 6.159 24 9.083 24a5.516 5.516 0 0 0 3.463-1.21 8.357 8.357 0 0 0 5.195-2.08c1.826-1.587 2.859-3.845 2.83-6.19-.013-1.362-.346-2.638-.978-3.763.117-1.273.221-4.996.221-5.03 0-3.103-2.484-5.67-5.539-5.727zm.056 2.675c1.642.03 2.978 1.412 2.978 3.081 0 .038-.145 4.497-.215 4.883a3.152 3.152 0 0 1-.203.69c.756.89 1.165 2 1.175 3.256.021 1.555-.681 3.076-1.926 4.16a5.763 5.763 0 0 1-3.8 1.444 5.986 5.986 0 0 1-.718-.048 3.386 3.386 0 0 1-.172.215 2.97 2.97 0 0 1-2.264 1.038c-1.573 0-2.897-1.255-3.013-2.856l-.008-.122a27.366 27.366 0 0 1 .005-2.662c.039-.679.06-1.831.062-2.08a3.124 3.124 0 0 1 .783-2.025c-.237-.835-.312-1.836-.167-3.02l.024-.212c.083-.695.208-1.72.72-2.7.765-1.473 2.168-2.318 3.848-2.318a4.568 4.568 0 0 1 .824.07c.546-.5 1.27-.81 2.067-.794Z" />
              </svg>
              <h2 className="text-xl font-bold mb-2">Scratch</h2>
              <p className="mb-4 text-gray-950">
                Get started learning basic coding concepts
              </p>
              <Link href="/languages/scratch" className="text-sky-800">
                Learn More
              </Link>
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
              <p className="mb-4 text-gray-950">
                Learn HTML, CSS & Javascript - the three core programming
                languages of the web.
              </p>
              <Link href="/languages/webdev" className="text-sky-800">
                Learn More
              </Link>
            </div>
            <div className="max-w-xs p-4 text-center justify-center">
              <svg
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="6rem"
                className="mx-auto mb-4"
              >
                <path
                  d="M6 2.5H7M4.5 4V1.5C4.5 0.947715 4.94772 0.5 5.5 0.5H9.5C10.0523 0.5 10.5 0.947715 10.5 1.5V6.5C10.5 7.05228 10.0523 7.5 9.5 7.5H5.5C4.94772 7.5 4.5 7.94772 4.5 8.5V13.5C4.5 14.0523 4.94772 14.5 5.5 14.5H9.5C10.0523 14.5 10.5 14.0523 10.5 13.5V11M8 4.5H1.5C0.947715 4.5 0.5 4.94772 0.5 5.5V10.5C0.5 11.0523 0.947715 11.5 1.5 11.5H4.5M7 10.5H13.5C14.0523 10.5 14.5 10.0523 14.5 9.5V4.5C14.5 3.94772 14.0523 3.5 13.5 3.5H10.5M8 12.5H9"
                  stroke="#000000"
                />
              </svg>
              <h2 className="text-xl font-bold mb-2">Python</h2>
              <p className="mb-4 text-gray-950">
                Learn one of the most popular programming languages in the world
              </p>
              <Link href="/languages/python" className="text-sky-800">
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
