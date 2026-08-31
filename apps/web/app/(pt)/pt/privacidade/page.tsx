import PrivacyRoute from "../../../../src/routes/PrivacyRoute";
import { buildPrivacyMetadata } from "../../../../src/routes/metadata";

export const metadata = buildPrivacyMetadata("pt");

export default function Page() {
  return <PrivacyRoute language="pt" />;
}
