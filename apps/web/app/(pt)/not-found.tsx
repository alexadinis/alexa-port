import type { Metadata } from "next";
import NotFoundRoute from "../../src/routes/NotFoundRoute";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return <NotFoundRoute language="pt" />;
}
