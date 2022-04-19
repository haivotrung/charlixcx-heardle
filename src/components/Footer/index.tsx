import React from "react";
import { IoHeart } from "react-icons/io5";

import * as Styled from "./index.styled";

export function Footer() {
  return (
    <footer>
      <Styled.Text>
        Made with <IoHeart /> by{" "}
        <Styled.Link href="https://twitter.com/thatvng">
          Hai Vo via Maciej Synowski
        </Styled.Link>
      </Styled.Text>
    </footer>
  );
}
