import React, { ReactElement } from "react";
import styled from "styled-components";

export interface todoItemsProps {
  items: [][];
  onClickChangeStatus: Function;
  finish: boolean;
  opened: boolean;
  all: boolean;
}

type ItemType = {
  status: boolean;
  inputText: string;
};

//styled components
const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Pchecked = styled.p`
  text-decoration: line-through;
  color: red;
`;

//Generic Types

type Item = {
  inputText: string;
  status: boolean;
};

//FC

const TodoItems: React.FC<todoItemsProps> = ({
  items,
  onClickChangeStatus,
  finish,
  opened,
  all,
}): ReactElement => {
  if (all) {
    return (
      <React.Fragment>
        <h1>All Items</h1>
        {returnItem(items)}
      </React.Fragment>
    );
  }

  if (finish === true) {
    let newItems = items.filter((item: any) => {
      return item.status === false;
    });
    return (
      <React.Fragment>
        <h1 style={{ color: "red" }}>Closed</h1>
        {returnItem(newItems)}
      </React.Fragment>
    );
  }

  if (opened === true) {
    let newItems = items.filter((item: any) => {
      return item.status === true;
    });

    return (
      <React.Fragment>
        <h1 style={{ color: "green" }}>Open</h1>
        {returnItem(newItems)}
      </React.Fragment>
    );
  }

  function returnItem(allItems: any) {
    return allItems.map((item: Item, index: number) => {
      if (item.status === true) {
        return (
          <Div onClick={() => onClickChangeStatus(index)} key={index}>
            <span>[ ]</span>
            <p>{item.inputText}</p>
          </Div>
        );
      }
      if (item.status === false) {
        return (
          <Div onClick={() => onClickChangeStatus(index)} key={index}>
            <span>&#10004;</span> <Pchecked>{item.inputText}</Pchecked>
          </Div>
        );
      }
      return <div>Click Show Items/Finished Items/Open Items</div>;
    });
  }
  return <div></div>;
};

export default TodoItems;
