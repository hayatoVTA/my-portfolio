import React from 'react'
import Header from './Header'
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import './Contact.css'
import { blue, orange } from '@material-ui/core/colors';

const contact = () => {
      
    return (
        <>
            <Header />
            <div className="contact-content">
                <div className="sns__contact">
                    <div className="sns__contactTitle"><p>SNSのDMでもお問い合わせを受け付けております。正直こちらの方が楽なのと返信が早いのでオススメです。</p></div>
                    <div className="sns__icon">
                        <div className="twitter__contact"><a href="https://twitter.com/messages/compose?recipient_id=1029347975544242177"><TwitterIcon style={{ fontSize: 40, color: blue[500] }} /></a></div>
                        <div className="instagram__contact"><a href="https://www.instagram.com/hayato.o_0423/"><InstagramIcon style={{ fontSize: 40, color: orange[800] }} /></a></div>
                    </div>
                </div>
                <div className="contact__googleForm container">
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf7NnpDYImaoxKYrYVEKQWhMMpHQYmuZ6OIT1tiyyjqGEiWnA/viewform?embedded=true" width={640} height={1000} frameBorder={0} marginHeight={0} marginWidth={0}>読み込んでいます…</iframe>
                </div>
            </div>
        </>
    )
}

export default contact
