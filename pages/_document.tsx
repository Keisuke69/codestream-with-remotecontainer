import Document, { Html, Head, Main, NextScript } from "next/document";
import { ReactElement } from "react";

class MyDocument extends Document {
  script = (<script src="newrelic.js" type="text/javascript" />);

  render(): ReactElement {
    return (
      <Html>
        <Head>this.script</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
