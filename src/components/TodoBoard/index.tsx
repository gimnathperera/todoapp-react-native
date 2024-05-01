import { View } from "react-native";
import { Board, BoardRepository } from "react-native-draganddrop-board";
import styles from "./styles";
import { FC } from "react";
import { Task } from "../../types/task-types";

export type Column = {
  id: number;
  name: string;
  rows: Task[];
};

type Props = {
  tasks: Column[];
};
const ToDoBoard: FC<Props> = ({ tasks }) => {
  const boardRepository = new BoardRepository(tasks);

  return (
    <View style={styles.boardContainer}>
      <Board
        boardRepository={boardRepository}
        open={() => {}}
        onDragEnd={() => {}}
        boardBackground="#ffffff"
        columnBorderRadius={24}
      />
    </View>
  );
};

export default ToDoBoard;
