import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import navLogo from '../../assets/img/logo/friendkit-bold.svg'
import { Smile, Image, User,  Lock, Flag } from 'react-feather';
import {ProcessPanel} from './processPanel';





function FakeNav() {
    return (
        <div className="fake-nav">
            <Link href="/" className="logo">
                <img src={navLogo} width="112" height="28" alt="" />
            </Link>
        </div>
    )
}

const ProcessBar = (props) => {
    
const isCurrent = "is-active is-current"
const isActive = "is-active"

    let width = 125*props.stage;
    return(
    <div className="process-bar-wrap">
        <div className="process-bar">
            <div className="progress-wrap">
                <div className="track"></div>
                <div className="bar" style={{width: width}}></div>
                <div id="step-dot-1" className={`dot is-first ${props.stage === 0 ?isCurrent : isActive}`}>
                    <Smile/>
                </div>
                <div id="step-dot-2" className={`dot is-second ${props.stage === 1 ?isCurrent : (props.stage < 1 ? `` : isActive)}`}>
                    <User/>
                </div>
                <div id="step-dot-3" className={`dot is-third  ${props.stage === 2 ?isCurrent : (props.stage < 2 ? `` : isActive)}`}>
                    <Image/>
                </div>
                <div id="step-dot-4" className={`dot is-fourth  ${props.stage === 3 ?isCurrent : (props.stage < 3 ? `` : isActive)}`}>
                    <Lock/>
                </div>
                <div id="step-dot-5" className={`dot is-fifth  ${props.stage === 4 ?isCurrent : (props.stage < 4 ? `` : isActive)}`}>
                    <Flag/>
                </div>
            </div>
        </div>
    </div>
)}

export default function SignUp() {

const [stage, setStage] = useState(0);


    return (
        <div className="signup-wrapper">
            <FakeNav />
            <ProcessBar stage={stage}/>
            <ProcessPanel stage={stage} setStage={setStage}/>
            <h1>SignUp</h1>
        </div>
    )
} 