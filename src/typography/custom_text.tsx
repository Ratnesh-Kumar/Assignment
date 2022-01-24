import React from "react";
import { Text,TextProps } from "react-native";
import useStyle from "./useStyle";


interface Props extends TextProps {
variant: string,
}

const Typography = ({
    variant,
    style,
    ...rest
  }: Props) => {
    const styles = useStyle();
    return (
      <Text
        style={[styles[variant], style]}
        {...rest}
      />
    );
  };

export default Typography;
