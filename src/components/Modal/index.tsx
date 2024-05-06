import React, { FC } from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

type Props = {
  title: string;
  children?: React.ReactNode;
  isOpen: boolean;
  handleOnUpdateModalVisibility: () => void;
};

const ModalComponent: FC<Props> = ({
  isOpen,
  title,
  handleOnUpdateModalVisibility,
  children,
}) => {
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={isOpen}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={handleOnUpdateModalVisibility}
            >
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            {title && <Text style={styles.modalTitle}>{title}</Text>}
            {children}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalComponent;
