"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function FormData() {
  const searchParams = useSearchParams();
  return (
    <div>
      {Array.from(searchParams.entries()).map(([key, value], index) => (
        <div key={`${key}-${index}`}>
          <strong>{key}:</strong> {value}
        </div>
      ))}
    </div>
  );
}

export default function FormSubmitPage() {
  return (
    <div className="container mx-auto mt-8 mb-64">
      <h1 className="text-3xl">Form Data</h1>
      <Suspense>
        <FormData />
      </Suspense>
      <Link href="/contact" className="text-blue-500 hover:underline">
        Go back to the contact form
      </Link>
    </div>
  );
}
