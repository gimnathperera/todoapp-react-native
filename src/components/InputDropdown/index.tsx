import { FC, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import styles from "./styles";
import { Controller, useFormContext } from "react-hook-form";
import { View } from "react-native";

export type Option = {
  label: string;
  value: string;
};
type Props = {
  placeholder?: string;
  name: string;
  options: Option[];
};

const InputDropdown: FC<Props> = ({ placeholder, name, options }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const [listOpen, setListOpen] = useState(false);

  return (
    <View>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <DropDownPicker
            open={listOpen}
            value={value}
            items={options}
            setOpen={() => setListOpen(!listOpen)}
            onChangeValue={onChange}
            placeholder={placeholder ?? "Select an item"}
            style={styles.inputDropdown}
            placeholderStyle={{ color: "#c5c5c7" }}
            setValue={onChange}
          />
        )}
        rules={{
          required: {
            value: true,
            message: "Please fill out all required fields.",
          },
        }}
      />
    </View>
  );
};

export default InputDropdown;
