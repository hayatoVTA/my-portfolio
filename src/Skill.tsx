import { Card, Button } from 'react-bootstrap';
import React from 'react';
import Header from './Header';
import Icon from './images/django_logo.png'
import PythonIcon from './images/python_logo.png'
import WordpressIcon from './images/wordpress-logo.png'
import FlutterIcon from './images/flutter_logo.png'
import ReactIcon from './images/react_logo.png'
import JavascriptIcon from './images/javascript_logo.png'
import HtmlIcon from './images/html_logo.png'
import CssIcon from './images/css_logo.png'
import BootstrapIcon from './images/bootstrap.png'
import PenIcon from './images/pen_logo.png'
import FirebaseIcon from './images/firebase_logo.png'
import GithubIcon from './images/github_logo.png'
import VscodeIcon from './images/vscode_logo.png'
import AwsIcon from './images/aws_logo.png'
import DockerIcon from './images/docker_logo.png'
import TwitterIcon from './images/twitter_logo.png'

import './Skill.css';

const Skill = () => {
    return (
        <div>
            <Header />
            <div className="skill-content container">
                <div className="skill__header">
                    <div className="skill__title">
                        <div className="s_title">Skill</div>
                        <div className="s_subtitle">今まで触ってきた言語や技術、仕事で身についたスキルをまとめています</div>
                        <p>言語は広く浅くやりすぎていて一つの言語に特化していないので教えていただけるとありがたいです。</p>
                    </div>
                </div>
                <div className="skills container">
                    <div className="skill__card">
                        <Card className="card" style={{ width: '10rem' }}>
                            <Card.Img className="logo" variant="top" src={TwitterIcon} />
                            <Card.Body>
                                <Card.Title>Twitter</Card.Title>
                                    <Card.Text className="card__bio">
                                    得意・好き
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="skill__card">
                        <Card style={{ width: '10rem' }}>
                            <Card.Img className="logo" variant="top" src={Icon} />
                            <Card.Body>
                                <Card.Title>Django</Card.Title>
                                    <Card.Text className="card__bio">
                                    ちょっと触れる・好き
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="skill__card">
                        <Card style={{ width: '10rem' }}>
                            <Card.Img className="logo" variant="top" src={PythonIcon} />
                            <Card.Body>
                                <Card.Title>Python</Card.Title>
                                    <Card.Text className="card__bio">
                                    ある程度触れる
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="skill__card">
                        <Card style={{ width: '10rem' }}>
                            <Card.Img className="logo" variant="top" src={WordpressIcon} />
                            <Card.Body>
                                <Card.Title>WordPress</Card.Title>
                                    <Card.Text className="card__bio">
                                    GUIだったらある程度触れる
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="skill__card">
                        <Card style={{ width: '10rem' }}>
                            <Card.Img className="logo" variant="top" src={FlutterIcon} />
                            <Card.Body>
                                <Card.Title>Flutter</Card.Title>
                                    <Card.Text className="card__bio">
                                    ちょっと触れる・インターンで使用
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="skill__card">
                        <Card style={{ width: '10rem' }}>
                            <Card.Img className="logo" variant="top" src={ReactIcon} />
                            <Card.Body>
                                <Card.Title>React</Card.Title>
                                    <Card.Text className="card__bio">
                                    全然触れん・ポートフォリオ
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="skill__card">
                        <Card style={{ width: '10rem' }}>
                            <Card.Img className="logo" variant="top" src={JavascriptIcon} />
                            <Card.Body>
                                <Card.Title>JavaScript</Card.Title>
                                    <Card.Text className="card__bio">
                                    微妙
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="skill__card">
                        <Card style={{ width: '10rem' }}>
                            <Card.Img className="logo" variant="top" src={HtmlIcon} />
                            <Card.Body>
                                <Card.Title>HTML5</Card.Title>
                                    <Card.Text className="card__bio">
                                    ある程度触れる
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="skill__card">
                        <Card style={{ width: '10rem' }}>
                            <Card.Img className="logo" variant="top" src={CssIcon} />
                            <Card.Body>
                                <Card.Title>CSS3</Card.Title>
                                    <Card.Text className="card__bio">
                                    ちょっと触れる
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="skill__card">
                        <Card style={{ width: '10rem' }}>
                            <Card.Img className="logo" variant="top" src={BootstrapIcon} />
                            <Card.Body>
                                <Card.Title>Bootstrap</Card.Title>
                                    <Card.Text className="card__bio">
                                    ちょっと触れる
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="skill__card">
                        <Card style={{ width: '10rem' }}>
                            <Card.Img className="logo" variant="top" src={PenIcon} />
                            <Card.Body>
                                <Card.Title>writing</Card.Title>
                                    <Card.Text className="card__bio">
                                        仕事で身についた
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="skill__card">
                        <Card style={{ width: '10rem' }}>
                            <Card.Img className="logo" variant="top" src={GithubIcon} />
                            <Card.Body>
                                <Card.Title>Github</Card.Title>
                                    <Card.Text className="card__bio">
                                    ある程度
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="skill__card">
                        <Card style={{ width: '10rem' }}>
                            <Card.Img className="logo" variant="top" src={DockerIcon} />
                            <Card.Body>
                                <Card.Title>Docker</Card.Title>
                                    <Card.Text className="card__bio">
                                    ちょっと触れる
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="skill__card">
                        <Card style={{ width: '10rem' }}>
                            <Card.Img className="logo" variant="top" src={VscodeIcon} />
                            <Card.Body>
                                <Card.Title>VSCode</Card.Title>
                                    <Card.Text className="card__bio">
                                    普段これで開発
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="skill__card">
                        <Card style={{ width: '10rem' }}>
                            <Card.Img className="logo" variant="top" src={AwsIcon} />
                            <Card.Body>
                                <Card.Title>AWS</Card.Title>
                                    <Card.Text className="card__bio">
                                    完全に理解した(い)
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="skill__card">
                        <Card style={{ width: '10rem' }}>
                            <Card.Img className="logo" variant="top" src= {FirebaseIcon} />
                            <Card.Body>
                                <Card.Title>Firebase</Card.Title>
                                    <Card.Text className="card__bio">
                                    ほんのちょっと
                                    </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill
