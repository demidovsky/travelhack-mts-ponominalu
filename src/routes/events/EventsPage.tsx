import { RouteComponentProps } from "react-router-dom";
import React from "react";

export type EventsPageProps = RouteComponentProps<{ id: string }>;

export class EventsPage extends React.Component<EventsPageProps> {
  render() {
    const { id } = this.props.match.params;
    return `event: ${id}`;
  }
}
