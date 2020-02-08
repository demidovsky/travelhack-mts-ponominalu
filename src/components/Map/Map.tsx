import React from "react"
import ymaps from "ymaps"
import styled from "styled-components"

export class Map extends React.Component {
    private map: any

    constructor(props: {}) {
        super(props)

        this.loadYmaps()
    }

    private loadYmaps = async () => {
        try {
            const map = await ymaps.load(
                "https://api-maps.yandex.ru/2.1/?apikey=0955f635-90e7-43c4-a522-d06b8a9edc99&lang=ru_RU"
            )

            this.initMap(map.Map)
        } catch (err) {
            console.error(err.message)
        }
    }

    private initMap = (Constructor: any) => {
        this.map = new Constructor("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.76, 37.64],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 7,
        })
    }

    render() {
        return <MapWrapper id="map"></MapWrapper>
    }
}

const MapWrapper = styled.div`
    width: 100vw;
    height: 100vh;
`
