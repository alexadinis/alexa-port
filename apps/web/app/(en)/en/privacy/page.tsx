import PrivacyRoute from "../../../../src/routes/PrivacyRoute";
import { buildPrivacyMetadata } from "../../../../src/routes/metadata";

export const metadata = buildPrivacyMetadata("en");

export default function Page() {
  return <PrivacyRoute language="en" />;
}
