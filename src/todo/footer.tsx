import { ReactElement } from "react";

import styled from "styled-components";

interface Button {
  primary: boolean;
}

const Btn = styled.button<Button>`
  padding: 1em;
  margin: 1em;
  background-color: ${(props) => (props.primary ? "green" : "blue")};
`;

export interface FooterProps {
  items: { status: boolean }[];
  finished: Function;
  open: Function;
  changeAll: Function;
  finish: boolean;
  opened: boolean;
  all: boolean;
}

const Footer: React.FC<FooterProps> = ({
  items,
  finished,
  open,
  changeAll,
  finish,
  opened,
  all,
}): ReactElement => {
  let newLength = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i].status === true) {
      newLength.push(items[i]);
    }
  }

  return (
    <div>
      {newLength.length} Items left
      <Btn primary={finish} onClick={() => finished()}>
        Finished Items
      </Btn>
      <Btn primary={opened} onClick={() => open()}>
        Open Items
      </Btn>
      <Btn primary={all} onClick={() => changeAll()}>
        Show All Items
      </Btn>
    </div>
  );
};

export default Footer;
