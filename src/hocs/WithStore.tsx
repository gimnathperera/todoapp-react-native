import { store } from "../store";
import { ReactElement } from "react";
import { Provider } from "react-redux";

type Props = {
  children: ReactElement | ReactElement[];
};

export const WithStore = ({ children }: Props): ReactElement | null => {
  return <Provider store={store}>{children}</Provider>;
};
