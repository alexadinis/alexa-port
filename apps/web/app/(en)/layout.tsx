import "../globals.css";
import RootShell, { buildRootMetadata } from "../../src/routes/RootShell";

export const metadata = buildRootMetadata("en");

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootShell language="en">{children}</RootShell>;
}
