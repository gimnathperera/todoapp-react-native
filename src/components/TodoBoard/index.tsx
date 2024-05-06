import { View, Text, TouchableOpacity } from "react-native";
import { Board, BoardRepository } from "react-native-draganddrop-board";
import styles from "./styles";
import { FC } from "react";
import { Task } from "../../types/task-types";
import ModalComponent from "../Modal";
import FormTaskCreateUpdate from "../FormTaskCreateEdit";

export type Column = {
  id: number;
  name: string;
  rows: Task[];
};

type Props = {
  tasks: Column[];
  isModalUpdateVisible: boolean;
  selectedTaskId: number | null;
  handleOnClickUpdateTask: (id: number) => void;
  handleOnUpdateModalVisibility: () => void;
};

type TodoItem = {
  id: number;
  name: string;
  description: string;
};

const ToDoBoard: FC<Props> = ({
  tasks,
  selectedTaskId,
  isModalUpdateVisible,
  handleOnClickUpdateTask,
  handleOnUpdateModalVisibility,
}) => {
  const boardRepository = new BoardRepository(tasks);

  return (
    <View style={styles.boardContainer}>
      <Board
        boardRepository={boardRepository}
        boardBackground="#ffffff"
        columnBorderRadius={24}
        cardContent={({ id, name, description }: TodoItem) => (
          <TouchableOpacity
            style={styles.todoCard}
            onPress={() => handleOnClickUpdateTask(id)}
          >
            <View style={styles.todoCardInnerContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.todoHeader}>{name}</Text>
                <Text>{description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      <ModalComponent
        title="Update Task"
        isOpen={isModalUpdateVisible}
        handleOnUpdateModalVisibility={handleOnUpdateModalVisibility}
      >
        <FormTaskCreateUpdate id={selectedTaskId} />
      </ModalComponent>
    </View>
  );
};

export default ToDoBoard;
