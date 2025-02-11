import styles from "./page.module.css";
import HeaderSm from "../components/HeaderSm";

export default function Home() {
  return (
    <div>
      <HeaderSm text="Contact" />
      <section className="container mx-auto">
        <p className="mb-4">
          Contact us about anything related to our company or services.
          <br />
          We&apos;ll do our best to get back to you as soon as possible.
        </p>
        <div className={styles.contactDetails}>
          <h3 className="text-lg font-bold hover:underline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width="1em"
            >
              <path
                fillRule="evenodd"
                d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                clipRule="evenodd"
              />
            </svg>
            <a href="tel:+640211077483">021 107 7483</a>
          </h3>
          <h3 className="text-lg font-bold hover:underline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              width="1em"
            >
              <path
                fillRule="evenodd"
                d="M5.404 14.596A6.5 6.5 0 1 1 16.5 10a1.25 1.25 0 0 1-2.5 0 4 4 0 1 0-.571 2.06A2.75 2.75 0 0 0 18 10a8 8 0 1 0-2.343 5.657.75.75 0 0 0-1.06-1.06 6.5 6.5 0 0 1-9.193 0ZM10 7.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
                clipRule="evenodd"
              />
            </svg>
            <a href="mailto:info@teatatucomputers.com">
              info@teatatucomputers.com
            </a>
          </h3>
        </div>
        <form
          action="https://form.taxi/s/es9ddva1"
          method="POST"
          className={styles.form}
        >
          <label htmlFor="Name">Name*</label>
          <input type="text" name="Name" required />

          <label htmlFor="Phone">Phone Number </label>
          <input type="tel" name="Phone" />

          <label htmlFor="Email">Email*</label>
          <input type="email" name="Email" required />

          <label htmlFor="firstname">Message*</label>
          <textarea name="Message"></textarea>

          <p className={styles.sm}>* required</p>

          <input type="submit" value="Submit" required />
        </form>
      </section>
    </div>
  );
}
