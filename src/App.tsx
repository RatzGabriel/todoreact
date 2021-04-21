import React, { FunctionComponent, ReactElement, useState } from "react";
import Footer from "./todo/footer";
import TodoItems from "./todo/todoItems";
import styled from "styled-components";
import "./components/app.css";

//Styled Components
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const WrapperDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

//FC

const App: FunctionComponent = (): ReactElement => {
  const [items, setItems] = useState<any>([]);
  const [inputText, setInputText] = useState<string>("");
  const [finish, setFinish] = useState<boolean>(false);
  const [opened, setOpened] = useState<boolean>(false);
  const [all, setAll] = useState<boolean>(true);

  const changeStatusFinished = () => {
    if (finish) {
      setFinish(false);
      setAll(true);
      setOpened(false);
    }
    if (finish === false) {
      setFinish(true);
      setOpened(false);
      setAll(false);
    }
  };

  const changeAll = () => {
    if (all) {
      setFinish(false);
      setAll(false);
      setOpened(false);
    }
    if (all === false) {
      setFinish(false);
      setOpened(false);
      setAll(true);
    }
  };

  const changeStatusOpened = () => {
    if (opened) {
      setFinish(false);
      setAll(true);
      setOpened(false);
    }
    if (opened === false) {
      setFinish(false);
      setOpened(true);
      setAll(false);
    }
  };

  const onInputChange = (ele: string) => {
    setInputText(ele);
    return null;
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.length === 0) {
      setInputText("please enter a text");
      return;
    } else {
      const newItem = { inputText, status: true };

      return setItems((prev: {}[]) => [...prev, newItem]);
    }
  };

  const onClickChangeStatus = (index: number) => {
    const newItem = items[index];

    if (newItem.status === true) {
      newItem.status = false;
    } else if (newItem.status === false) {
      newItem.status = true;
    }
    setItems((prev: [][]) => {
      const copy = [...prev];
      copy[index] = newItem;
      return [...copy];
    });
  };

  return (
    <WrapperDiv>
      <Div className="App">
        <h1>Things to do:</h1>
        <form onSubmit={onFormSubmit}>
          <label htmlFor=""></label>
          <input
            onChange={(e) => onInputChange(e.target.value)}
            type="text"
            name="itemText"
            value={inputText}
          />
          <Div>
            <button type="submit">Submit</button>
          </Div>
        </form>
        <TodoItems
          onClickChangeStatus={onClickChangeStatus}
          items={items}
          finish={finish}
          opened={opened}
          all={all}
        ></TodoItems>

        <Footer
          finished={changeStatusFinished}
          open={changeStatusOpened}
          items={items}
          changeAll={changeAll}
          finish={finish}
          opened={opened}
          all={all}
        />
      </Div>
    </WrapperDiv>
  );
};

export default App;
