import React from "react";
import { MdBloodtype } from "react-icons/md";

import * as Styled from "./index.styled";

export function Footer() {
  return (
    <footer>
      <Styled.Text>
        Made with <MdBloodtype /> by{" "}
        <Styled.Link href="https://twitter.com/">
          Hai
        </Styled.Link>
      </Styled.Text>
    </footer>
  );
}
