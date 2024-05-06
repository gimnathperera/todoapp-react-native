import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  boardContainer: {
    flex: 1,
    padding: 1,
    backgroundColor: "#fff",
  },
  todoCard: {
    padding: 16,
    margin: 8,
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  todoCardInnerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  todoHeader: {
    color: "#3E2BCC",
    fontSize: 16,
    fontWeight: "500",
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    gap: 4,
  },
});

export default styles;
