import React from "react";
import { useTheme } from "src/lib/states/theme";
interface Props
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {}

export default function Logo(props: Props) {
  const theme = useTheme();
  return theme !== "dark" ? (
    <img {...props} src="assets/instagram.png" alt="" />
  ) : (
    <img {...props} src="assets/instagram2.png" alt="" />
  );
}
