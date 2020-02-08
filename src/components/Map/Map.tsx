/* eslint-disable */
import React from "react";
import ymaps from "ymaps";
import styled from "styled-components";
import { xinject } from "../../utils/inject";
import { EventStore } from "../../stores/EventStore";
import addMonths from "date-fns/addMonths";
import format from "date-fns/format";

type MapProps = { width: string; height: string };

export class Map extends React.Component<MapProps> {
  eventStore = xinject(EventStore);

  private map: any;
  private mapInstance: any;

  constructor(props: MapProps) {
    super(props);
    this.init();
  }

  private init = async () => {
    try {
      this.map = await ymaps.load(
        "https://api-maps.yandex.ru/2.1/?apikey=0955f635-90e7-43c4-a522-d06b8a9edc99&lang=ru_RU"
      );

      this.initMap();

      const events = await this.eventStore.load({
        start_date: format(new Date(), "yyyy-MM-dd"),
        end_date: format(addMonths(new Date(), 1), "yyyy-MM-dd")
      });

      this.drawEvents(events);
    } catch (err) {
      console.error(err);
    }
  };

  private drawEvents = (events: any[]) => {
    events.forEach(event => {
      const placeMark = new this.map.Placemark(
        event.venue.google_address.split(","),
        {
          iconCaption: event.title
          // balloonContent
        }
      );

      this.mapInstance.geoObjects.add(placeMark);
      placeMark.events.add("click", () => alert("mark clicked"));
    });
  };

  private initMap = () => {
    this.mapInstance = new this.map.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.76, 37.64],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 7
    });
    this.mapInstance.behaviors.disable("scrollZoom");
  };

  render() {
    const { width, height } = this.props;
    return <MapWrapper width={width} height={height} id="map"></MapWrapper>;
  }
}

const MapWrapper = styled.div<MapProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
