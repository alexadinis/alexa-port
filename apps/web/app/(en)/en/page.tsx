import HomeRoute from "../../../src/routes/HomeRoute";
import { buildHomeMetadata } from "../../../src/routes/metadata";

export const metadata = buildHomeMetadata("en");

export default function Page() {
  return <HomeRoute language="en" />;
}
