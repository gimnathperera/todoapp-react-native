import { FC, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import styles from "./styles";

type Props = {
  placeholder?: string;
};

const InputDropdown: FC<Props> = ({ placeholder }) => {
  const [open, setOpen] = useState(false);

  const [value, setValue] = useState(null);

  const [items, setItems] = useState([
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder={placeholder ?? "Select an item"}
      style={styles.inputDropdown}
      placeholderStyle={{ color: "#c5c5c7" }}
    />
  );
};

export default InputDropdown;
