import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  formContainer: {
    display: "flex",
    paddingTop: 32,
    gap: 16,
  },
  modalFormContainer: {
    display: "flex",
    paddingTop: 32,
    gap: 16,
    width: 275,
  },
  title: {
    color: "#3E2BCC",
    fontSize: 32,
    textAlign: "center",
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default styles;
