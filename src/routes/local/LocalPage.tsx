import { RouteComponentProps } from "react-router-dom";
import React from "react";

export type LocalPageProps = RouteComponentProps<{}>;

export class LocalPage extends React.Component<LocalPageProps> {
  render() {
    return "local page";
  }
}
