import { FC } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { Controller, useFormContext } from "react-hook-form";

type Props = {
  name: string;
  placeholder: string;
};

const InputTextfield: FC<Props> = ({ placeholder, name }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <View>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder={placeholder}
            style={styles.textInput}
            defaultValue={value}
            onChangeText={(v) => onChange(v)}
          />
        )}
      />

      {errors[name]?.message ? (
        <Text style={styles.errorText}>{String(errors[name]?.message)}</Text>
      ) : null}
    </View>
  );
};

export default InputTextfield;
