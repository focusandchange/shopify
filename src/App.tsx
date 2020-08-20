import React from "react";
import styled from "styled-components";
import "./App.css";
//项目容器的容器
const Body = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  justify-content: center;
`;
//项目容器
const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  width: 800px;
  height: 800px;
  flex-wrap: wrap;
  align-content: space-between;
`;
//骰子中的黑点的几种不同样式
const FlexItem = styled.div`
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin: 4px;

  background-color: #333;
  box-shadow: inset 0 3px #111, inset 0 -3px #555;
`;
const FlexItemBlack1 = styled.div`
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin: 4px;

  background-color: #333;
  box-shadow: inset 0 3px #111, inset 0 -3px #555;
  &:nth-child(2) {
    align-self: flex-end;
  }
`;
const FlexItemBlack2 = styled.div`
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin: 4px;

  background-color: #333;
  box-shadow: inset 0 3px #111, inset 0 -3px #555;
  &:nth-child(2) {
    align-self: center;
  }
  &:nth-child(3) {
    align-self: flex-end;
  }
`;
const FlexItemBlack3 = styled.div`
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin: 4px;

  background-color: #333;
  box-shadow: inset 0 3px #111, inset 0 -3px #555;
  /* &:nth-child(2) {
    align-self: flex-end;
  }
  &:nth-child(4) {
    align-self: flex-end;
  } */
`;
const FlexItemBlack4 = styled.div`
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin: 4px;

  background-color: #333;
  box-shadow: inset 0 3px #111, inset 0 -3px #555;
`;
const FlexItemBlack5 = styled.div`
  display: block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin: 4px;

  background-color: #333;
  box-shadow: inset 0 3px #111, inset 0 -3px #555;
`;
//九个骰子
const FlexItem1 = styled.div`
  display: flex;
  margin: 16px;
  padding: 4px;

  background-color: #e7e7e7;
  width: 104px;
  height: 104px;
  object-fit: contain;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 5px white, inset 0 -5px #bbb, inset 5px 0 #d7d7d7,
    inset -5px 0 #d7d7d7;

  border-radius: 10%;
`;
const FlexItem2 = styled.div`
  display: flex;
  margin: 16px;
  padding: 4px;

  background-color: #e7e7e7;
  width: 104px;
  height: 104px;
  object-fit: contain;
  justify-content: space-between;
  box-shadow: inset 0 5px white, inset 0 -5px #bbb, inset 5px 0 #d7d7d7,
    inset -5px 0 #d7d7d7;

  border-radius: 10%;
`;

const FlexItem3 = styled.div`
  display: flex;
  margin: 16px;
  padding: 4px;

  background-color: #e7e7e7;
  width: 104px;
  height: 104px;
  object-fit: contain;

  box-shadow: inset 0 5px white, inset 0 -5px #bbb, inset 5px 0 #d7d7d7,
    inset -5px 0 #d7d7d7;

  border-radius: 10%;
`;
const FlexItem4 = styled.div`
  display: flex;
  margin: 16px;
  padding: 4px;

  background-color: #e7e7e7;
  width: 104px;
  height: 104px;
  object-fit: contain;

  box-shadow: inset 0 5px white, inset 0 -5px #bbb, inset 5px 0 #d7d7d7,
    inset -5px 0 #d7d7d7;
  flex-wrap: wrap;
  align-content: space-between;
  border-radius: 10%;
`;
const FlexItem5 = styled.div`
  display: flex;
  margin: 16px;
  padding: 4px;

  background-color: #e7e7e7;
  width: 104px;
  height: 104px;
  object-fit: contain;
  flex-wrap: wrap;
  box-shadow: inset 0 5px white, inset 0 -5px #bbb, inset 5px 0 #d7d7d7,
    inset -5px 0 #d7d7d7;
  align-items: center;
  justify-content: center;
  border-radius: 10%;
`;
const FlexItem6 = styled.div`
  display: flex;
  margin: 16px;
  padding: 4px;

  justify-content: flex-end;
  background-color: #e7e7e7;
  width: 104px;
  height: 104px;
  object-fit: contain;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  flex-direction: column;
  box-shadow: inset 0 5px white, inset 0 -5px #bbb, inset 5px 0 #d7d7d7,
    inset -5px 0 #d7d7d7;

  border-radius: 10%;
`;
const FlexItem7 = styled.div`
  margin: 16px;
  padding: 4px;
  display: flex;

  background-color: #e7e7e7;
  width: 104px;
  height: 104px;
  object-fit: contain;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 5px white, inset 0 -5px #bbb, inset 5px 0 #d7d7d7,
    inset -5px 0 #d7d7d7;

  border-radius: 10%;
`;
const FlexItem8 = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 16px;
  padding: 4px;

  background-color: #e7e7e7;
  width: 104px;
  height: 104px;
  object-fit: contain;

  box-shadow: inset 0 5px white, inset 0 -5px #bbb, inset 5px 0 #d7d7d7,
    inset -5px 0 #d7d7d7;

  border-radius: 10%;
`;
const FlexItem9 = styled.div`
  display: flex;

  margin: 16px;
  padding: 4px;

  background-color: #e7e7e7;
  width: 104px;
  height: 104px;

  box-shadow: inset 0 5px white, inset 0 -5px #bbb, inset 5px 0 #d7d7d7,
    inset -5px 0 #d7d7d7;
  flex-wrap: wrap;
  justify-content: space-between;
  border-radius: 10%;
`;

const ROW = styled.div`
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
`;
const ROW2 = styled.div`
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
  align-self: center;
`;
const ROW3 = styled.div`
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
  align-self: flex-end;
`;
function App() {
  return (
    <div>
      <Body>
        <Flex>
          <ROW>
            <FlexItem1>
              <FlexItem></FlexItem>
            </FlexItem1>
            <FlexItem2>
              <FlexItemBlack1></FlexItemBlack1>
              <FlexItemBlack1></FlexItemBlack1>
            </FlexItem2>

            <FlexItem3>
              <FlexItemBlack2></FlexItemBlack2>
              <FlexItemBlack2></FlexItemBlack2>
              <FlexItemBlack2></FlexItemBlack2>
            </FlexItem3>
          </ROW>
          <ROW2>
            <FlexItem4>
              <ROW>
                <FlexItemBlack3></FlexItemBlack3>
                <FlexItemBlack3></FlexItemBlack3>
              </ROW>
              <ROW3>
                <FlexItemBlack3></FlexItemBlack3>
                <FlexItemBlack3></FlexItemBlack3>
              </ROW3>
            </FlexItem4>
            <FlexItem5>
              <ROW>
                <FlexItemBlack3></FlexItemBlack3>
                <FlexItemBlack3></FlexItemBlack3>
              </ROW>
              <FlexItemBlack4></FlexItemBlack4>
              <ROW3>
                <FlexItemBlack3></FlexItemBlack3>
                <FlexItemBlack3></FlexItemBlack3>
              </ROW3>
            </FlexItem5>
            <FlexItem6>
              <FlexItem></FlexItem>
              <FlexItem></FlexItem>
              <FlexItem></FlexItem>
              <FlexItem></FlexItem>
              <FlexItem></FlexItem>
              <FlexItem></FlexItem>
            </FlexItem6>
          </ROW2>
          <ROW3>
            <FlexItem7>
              <ROW>
                <FlexItem></FlexItem>
                <FlexItem></FlexItem>
                <FlexItem></FlexItem>
              </ROW>
              <FlexItemBlack4></FlexItemBlack4>
              <ROW2>
                <FlexItem></FlexItem>
                <FlexItem></FlexItem>
                <FlexItem></FlexItem>
              </ROW2>
            </FlexItem7>
            <FlexItem8>
              <ROW>
                <FlexItem></FlexItem>
                <FlexItem></FlexItem>
                <FlexItem></FlexItem>
              </ROW>
              <ROW2>
                <FlexItemBlack5></FlexItemBlack5>
                <FlexItemBlack5></FlexItemBlack5>
              </ROW2>
              <ROW3>
                <FlexItem></FlexItem>
                <FlexItem></FlexItem>
                <FlexItem></FlexItem>
              </ROW3>
            </FlexItem8>
            <FlexItem9>
              <FlexItem></FlexItem>
              <FlexItem></FlexItem>
              <FlexItem></FlexItem>
              <FlexItem></FlexItem>
              <FlexItem></FlexItem>
              <FlexItem></FlexItem>
              <FlexItem></FlexItem>
              <FlexItem></FlexItem>
              <FlexItem></FlexItem>
            </FlexItem9>
          </ROW3>
        </Flex>
      </Body>
    </div>
  );
}

export default App;
