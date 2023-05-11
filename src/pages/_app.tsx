import { PortalHeader } from "components/portal/PortalHeader";
import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div>
      <PortalHeader />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
