// This is a thin wrapper over react-helmet to maintain consistent imports
import { Helmet as ReactHelmet, HelmetProps } from "react-helmet";

export const Helmet = (props: HelmetProps) => {
  return <ReactHelmet {...props} />;
};
