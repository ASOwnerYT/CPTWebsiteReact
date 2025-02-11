import HeaderSm from "../../components/HeaderSm";

export default function Home() {
  return (
    <div style={{ marginBottom: "30em" }}>
      <HeaderSm text="IT Support" />
      <section className="container mx-auto mb">
        <h1 className="text-2xl mb-4">IT Support</h1>
        <p>
          At Te Atatu Computers, we specialize in providing personalized IT
          support tailored to the needs of individuals and small businesses.
          Whether you&apos;re dealing with a sluggish computer, software glitches, or
          networking issues, our experienced technicians are here to help. We
          offer on-site and remote support, ensuring minimal disruption to your
          day-to-day activities. From troubleshooting and repairs to software
          installations and system upgrades, we provide comprehensive solutions
          to keep your technology running smoothly. Our goal is to simplify
          technology for you, so you can focus on what matters most. <br /><br />
          For small businesses, we understand that reliable IT systems are
          essential for productivity and growth. Te Atatu Computers offers a
          range of services, including network setup, data backup solutions, and
          cybersecurity protection, to safeguard your operations. We can also
          assist with cloud services and ensure your systems are up to date for
          maximum efficiency. Our team takes the time to understand your unique
          business requirements, providing proactive support and expert advice
          to help you thrive in today&apos;s digital landscape. With Te Atatu
          Computers, you get more than just IT support—you gain a trusted
          technology partner.
        </p>
      </section>
    </div>
  );
}
