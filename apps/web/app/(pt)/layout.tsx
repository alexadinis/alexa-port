import "../globals.css";
import RootShell, { buildRootMetadata } from "../../src/routes/RootShell";

export const metadata = buildRootMetadata("pt");

export default function PortugueseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootShell language="pt">{children}</RootShell>;
}
