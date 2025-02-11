import HeaderSm from "../../components/HeaderSm";

export default function Home() {
  return (
    <div style={{ marginBottom: "30em" }}>
      <HeaderSm text="Virus Removal" />
      <section className="container mx-auto mb">
        <h1 className="text-2xl mb-4">Virus & Malware Removal</h1>
        <p>
          Te Atatu Computers specializes in efficient and thorough virus removal
          services for Windows devices, ensuring your computer is free from
          harmful malware, spyware, and ransomware. Our experienced technicians
          use advanced tools to identify and eliminate threats while
          safeguarding your valuable data. We also perform a comprehensive
          system check to ensure there are no lingering vulnerabilities,
          restoring your device to optimal performance. Additionally, we provide
          advice on enhancing your system&apos;s security, including installing
          reliable antivirus software and adopting safe browsing habits, to help
          prevent future infections. With Te Atatu Computers, you can trust your
          device is in expert hands.
        </p>
      </section>
    </div>
  );
}
