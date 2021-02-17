import { Card } from 'react-bootstrap'
import React from 'react'
import Header from './Header'

import './Career.css'

const career = () => {
    return (
        <div>
            <Header />
            <div className="career-content container">
                <div className="career__header">
                    <div className="career__title">
                        <div className="c_title">Career</div>
                        <div className="c_subtitle">学歴と職歴</div>
                        <p>2004年生まれ Age:16</p>
                    </div>
                </div>
                <div className="careers">
                    <div className="career__card">
                        <Card.Header>2020年4月〜</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    不動産系企業のWebライター{' '}
                                </p>
                                <footer className="blockquote-footer">
                                    Webライティング
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </div>
                    <div className="line_fix"></div>
                    <div className="career__card">
                        <Card.Header>2020年4月</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    日本テレビ「スッキリ」『稼ぐ中高生』特集{' '}
                                </p>
                                <footer className="blockquote-footer">
                                    ブログSEO・コピーライティング
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </div>
                    <div className="line_fix"></div>
                    <div className="career__card">
                        <Card.Header>2020年4月〜</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    N高等学校入学{' '}
                                </p>
                                <footer className="blockquote-footer">
                                    5期生 ネットコース (N高生の友達が全然いないので仲良くしてください)
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </div>
                    <div className="line_fix"></div>
                    <div className="career__card">
                        <Card.Header>2020年4月〜</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    テックフォードアカデミー高等部に入学、プログラミングを始める{' '}
                                </p>
                                <footer className="blockquote-footer">
                                    チーム開発(Python, Django, Docker, Apache, AWS)
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </div>
                    <div className="line_fix"></div>
                    <div className="career__card">
                        <Card.Header>2020年11月〜</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    株式会社CARCHにてFlutterでのアプリ開発{' '}
                                </p>
                                <footer className="blockquote-footer">
                                    モバイルアプリエンジニア (Flutter・Firebase・Github)
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </div>
                    <div className="line_fix"></div>
                    <div className="career__card">
                        <Card.Header>2020年2月〜</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    日本暗号資産市場株式会社にてオペレーション業務{' '}
                                </p>
                                <footer className="blockquote-footer">
                                    現場オペレーション・ブロックチェーン・カスタマーサポート
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </div>
                    {/* <div className="line_fix"></div>
                    <div className="career__card">
                        <Card.Header>2020年2月〜</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    {' '}
                                    株式会社立ち上げに関して{' '}
                                </p>
                                <footer className="blockquote-footer">
                                    代表取締役社長
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default career
