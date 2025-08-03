import Image from "next/image";
import * as React from "react";
import { ComponentProps } from "react";

const SariraFigMalt = (props: ComponentProps<typeof Image>) => (
  <Image
    priority
    src="https://storage.googleapis.com/stedi-dev-images/sarira-fig-malt.png"
    width={500}
    height={500}
    alt="SARIRA Fig Malt"
    {...props}
  />
);

export default SariraFigMalt;
