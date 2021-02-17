import React from 'react'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import HeaderImage from './images/test_headerImage.jpeg'
import Icon from './images/my_image.jpeg'
import DateRangeIcon from '@material-ui/icons/DateRange';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import InsertLinkIcon from '@material-ui/icons/InsertLink';

import './Home.css';

const home = () => {
    return (
        <div>
            <Header />
            <div className="profile__headerImage">
                <img src={HeaderImage} alt=""/>
            </div>
            <div className="main__content container">
                <div className="profile">
                    <div className="bio">
                        <figure className="profile__icon">
                            <img src={Icon} alt=""/>
                        </figure>
                        <div className="profile__name">Hayato Omori (大森駿斗)</div>
                        <div className="profile__id">@I wanna be a Serverside Engineer</div>
                        <Button className="follow__button" variant="outline-primary"><a href="https://twitter.com/intent/follow?screen_name=hayato_VTA">Twitterをフォロー</a></Button>
                    </div>
                    <div className="profile__bio">
                        <p>16 years old. I'm a high school student.<br/>I'm a beginner engineer in Japan. And I'm in the blockchain industry right now. Learning Flutter,Python,Firebase and AWS. Please teach me all about it!</p>
                        <br/>
                        <p>16歳 高校一年生です<br/>私は日本の駆け出しエンジニアです。現在はブロックチェーン業界とレストランテック業界で働いています。Flutter, Python, React, Firebase, AWSなどを勉強しています。広く浅くでイマイチ深まっていないところもあるので教えていただけるとありがたいです！ Twitterが好きです!</p>
                        <br/>
                        <div className="profile__location"><LocationOnIcon /> だ埼玉</div>
                        <div className="profile__date"><DateRangeIcon /> 2021年2月14日からこのポートフォリオを利用しています</div>
                        <div className="profile__link"><InsertLinkIcon /> <a href="https://hayato-blog.net">https://hayato-blog.net/</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default home
