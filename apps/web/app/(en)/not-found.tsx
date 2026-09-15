import type { Metadata } from "next";
import NotFoundRoute from "../../src/routes/NotFoundRoute";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return <NotFoundRoute language="en" />;
}
