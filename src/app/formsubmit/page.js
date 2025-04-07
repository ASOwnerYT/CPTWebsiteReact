"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function FormSubmitPage() {
  const searchParams = useSearchParams();

  return (
    <div className="container mx-auto mt-8 mb-64">
      <h1 className="text-3xl">Form Data</h1>
      {Array.from(searchParams.entries()).map(([key, value], index) => (
        <div key={`${key}-${index}`}>
          <strong>{key}:</strong> {value}
        </div>
      ))}
      <Link href="/contact" className="text-blue-500 hover:underline">
        Go back to the contact form
      </Link>
    </div>
  );
}
