import React, { Component } from "react"
import {
    Card,
    CardHeadBlock,
    CardHead,
    CardHeadTitle,
    CardTitle,
    CardFooter,
    CardFooterLine,
    CardFooterText,
    CardPrice,
} from "../components/Card/Card"

import translit from './../utils/translit'

import dm from './dm.jpg';
import nikita from './nikita.jpg';
import maria from './maria.jpg';


interface MyProps {
  item: any
}

interface MyState {
}


export class BottomCard extends Component<MyProps, MyState> {
    onClick = () => {
        const alias = this.props.item.seo.alias;
        const datetime = this.props.item.subevents[0].date.slice(0,-3).split('T');
        console.log(alias, datetime);
        pnwidget.show({init:{referral_auth: 'jpmvbqspphkmox9pigteawcoxfwl1iqa', language: 'en'}, event:{alias: alias,  /*date: datetime[0], time:datetime[1]*/}, tickets_show: true, exclude_dates: true, customStyle: true, hideHeader: false, closeButton: true})

{/*<img src="https://partners.ponominalu.ru/img/banners/buttons/btn-alt-partner-b@2x.png" width="300px" style="cursor: pointer;" onclick="pnwidget.show({init:{referral_auth: 'jpmvbqspphkmox9pigteawcoxfwl1iqa', language: 'en'}, event:{alias: 'vajkule-lajma'}, tickets_show: true, exclude_dates: true, customStyle: true, hideHeader: false, closeButton: true})">*/}

    }


    render() {
        const evt = this.props.item.subevents[0];
        const datetime = evt.date.slice(0,-3).split('T');
        const src = this.props.item.src || `https://media.ponominalu.ru/i/600x300/${evt.image}`;
        return (
            <Card>
                <CardHeadBlock>
                    <CardHead style={{ height: this.props.item.large ? '300px' : '170px' }}>
                        <img src={src} alt="" className="img-responsive"/>
                        <CardHeadTitle></CardHeadTitle>
                    </CardHead>
                    <CardTitle>{translit(this.props.item.title)}</CardTitle>
                </CardHeadBlock>
                <CardFooter>
                    <CardFooterLine>
                        <CardFooterText>{datetime[0]} {datetime[1]}</CardFooterText>
                        <CardPrice>from {evt.min_price} RUB</CardPrice>
                    </CardFooterLine>
                    <CardFooterLine>
                        <CardFooterText>
                            <img className="looking-for" src={dm} />
                            <img className="looking-for" src={maria} />
                            <img className="looking-for" src={nikita} />
                            <span className="ml-3">3 locals looking for company</span>
                        </CardFooterText>
                    </CardFooterLine>
                </CardFooter>
                <div>
                    <div className="btn btn-black btn-large" onClick={this.onClick}><b>BUY TICKET</b></div>
                    {/*<img src="https://partners.ponominalu.ru/img/banners/buttons/btn-alt-partner-b@2x.png" width="200px"  onClick={this.onClick}/>*/}
                </div>
            </Card>
        );
    }
}
