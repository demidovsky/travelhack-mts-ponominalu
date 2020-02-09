/* eslint-disable */
import React from "react";
import ymaps from "ymaps";
import styled from "styled-components";
import { xinject } from "../../utils/inject";
import { EventStore } from "../../stores/EventStore";
import addMonths from "date-fns/addMonths";
import format from "date-fns/format";
import translit from "../../utils/translit";

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
        "https://api-maps.yandex.ru/2.1/?apikey=0955f635-90e7-43c4-a522-d06b8a9edc99&lang=en_US"
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
          // iconCaption: translit(event.title)
          hintContent: translit(event.title)
        },
        {
          iconLayout: "default#image",
          // Своё изображение иконки метки.
          iconImageHref: "/marker.png",
          // Размеры метки.
          iconImageSize: [36, 54],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          // iconImageOffset: [-5, -38]
          cursor: "pointer"
        }
      );
      this.mapInstance.geoObjects.add(placeMark);
      placeMark.events.add("click", () =>
        pnwidget.show({
          init: {
            referral_auth: "jpmvbqspphkmox9pigteawcoxfwl1iqa",
            language: "en"
          },
          event: {
            alias: event.event.alias /*date: datetime[0], time:datetime[1]*/
          },
          tickets_show: true,
          exclude_dates: true,
          customStyle: true,
          hideHeader: false,
          closeButton: true
        })
      );
    });
  };

  private initMap = () => {
    this.mapInstance = new this.map.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.752219, 37.609846],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 14
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
