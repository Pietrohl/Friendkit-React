import { Link } from 'react-router-dom';
import { Plus } from 'react-feather';
import company from '../../assets/img/illustrations/signup/company.svg'
import publi from '../../assets/img/illustrations/signup/public.svg'
import personal from '../../assets/img/illustrations/signup/personal.svg'
import mailbox from '../../assets/img/illustrations/signup/mailbox.svg'
let isActive = "process-panel-wrap is-active is-narrow";
let isInactive = "process-panel-wrap is-narrow";


const FirstPanel = (props) => {

    isInactive = "process-panel-wrap is-narrow";
    isActive = "process-panel-wrap is-active";

    return (
        <div id="signup-panel-1" className={props.stage === 0 ? isActive : isInactive}>
            <div className="columns">
                <div className="column is-4">
                    <div className="account-type">
                        <img src={company} alt="" />
                        <h3>Company</h3>
                        <p>Create a company account to be able to do some awesome things.</p>
                        <button className="button is-fullwidth is-rounded process-button" onClick={() => props.setStage(props.stage + 1)} >
                            Continue
                        </button>
                    </div>
                </div>
                <div className="column is-4">
                    <div className="account-type">
                        <img src={publi} alt="" />
                        <h3>Public Person</h3>
                        <p>Create a company account to be able to do some awesome things.</p>
                        <button className="button is-fullwidth is-rounded process-button" onClick={() => props.setStage(props.stage + 1)}>
                            Continue
                        </button>
                    </div>
                </div>
                <div className="column is-4">
                    <div className="account-type">
                        <img src={personal} alt="" />
                        <h3>Personal</h3>
                        <p>Create a company account to be able to do some awesome things.</p>
                        <button className="button is-fullwidth is-rounded process-button" onClick={() => props.setStage(props.stage + 1)}>
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}


const SecondPanel = (props) => {
    isInactive = "process-panel-wrap is-narrow";
    isActive = "process-panel-wrap is-active is-narrow";

    return (
        <div id="signup-panel-2" className={props.stage === 1 ? isActive : isInactive}>
            <div className="form-panel">
                <div className="field">
                    <label>First Name</label>
                    <div className="control">
                        <input type="text" className="input" placeholder="Enter your first name" />
                    </div>
                </div>
                <div className="field">
                    <label>Last Name</label>
                    <div className="control">
                        <input type="text" className="input" placeholder="Enter your last name" />
                    </div>
                </div>
                <div className="field">
                    <label>Email</label>
                    <div className="control">
                        <input type="text" className="input" placeholder="Enter your email address" />
                    </div>
                </div>
            </div>

            <div className="buttons">
                <button onClick={() => props.setStage(props.stage - 1)}
                    className="button is-rounded process-button">Back</button>
                <button onClick={() => props.setStage(props.stage + 1)}
                    className="button is-rounded process-button is-next">Next</button>
            </div>
        </div>
    )
}
const ThirdPanel = (props) => {
    isInactive = "process-panel-wrap is-narrow";
    isActive = "process-panel-wrap is-active is-narrow";

    return (

        <div id="signup-panel-3" className={props.stage === 2 ? isActive : isInactive}>
            <div className="form-panel">
                <div className="photo-upload">
                    <div className="preview">
                        <button className="upload-button">
                            <Plus />
                        </button>
                        <img id="upload-preview" src="https://via.placeholder.com/150x150"
                            data-demo-src="assets/img/avatars/avatar-w.png" alt=""/>
                            <form id="profile-pic-dz" className="dropzone is-hidden" action="/"></form>
                    </div>
                        <div className="limitation">
                            <small>Only images with a size lower than 3MB are allowed.</small>
                        </div>
                    </div>
                </div>

                <div className="buttons">
                    <button onClick={() => props.setStage(props.stage - 1)}
                        className="button is-rounded process-button" >Back</button>
                    <button onClick={() => props.setStage(props.stage + 1)}
                        className="button is-rounded process-button is-next" >Next</button>
                </div>
            </div>
    )
}
const FourthPanel = (props) => {
                isInactive = "process-panel-wrap is-narrow";
    isActive = "process-panel-wrap is-active is-narrow";

    return (
            <div id="signup-panel-4" className={props.stage === 3 ? isActive : isInactive}>
                <div className="form-panel">
                    <div className="field">
                        <label>Password</label>
                        <div className="control">
                            <input type="password" className="input" placeholder="Choose a password" />
                        </div>
                    </div>
                    <div className="field">
                        <label>Repeat Password</label>
                        <div className="control">
                            <input type="password" className="input" placeholder="Repeat your password" />
                        </div>
                    </div>
                    <div className="field">
                        <label>Phone Number</label>
                        <div className="control">
                            <input type="text" className="input" placeholder="Enter your phone number" />
                        </div>
                    </div>
                </div>

                <div className="buttons">
                    <button onClick={() => props.setStage(props.stage - 1)}
                        className="button is-rounded process-button" >Back</button>
                    <button onClick={() => props.setStage(props.stage + 1)}
                        className="button is-rounded process-button is-next" >Next</button>
                </div>
            </div>

    )
}
const FifthPanel = (props) => {
                isInactive = "process-panel-wrap is-narrow";
    isActive = "process-panel-wrap is-active is-narrow";
    return (
            <div id="signup-panel-5" className={props.stage === 4 ? isActive : isInactive}>
                <div className="form-panel">
                    <img className="success-image" src={mailbox} alt="" />
                    <div className="success-text">
                        <h3>Congratz, you successfully created your account.</h3>
                        <p> We just sent you a confirmation email. PLease confirm your account within 24 hours.</p>
                        <Link id="signup-finish" to="/feed" className="button is-fullwidth is-rounded">Let Me In</Link>
                    </div>
                </div>
            </div>
    )
}



const ProcessTitle = (props) => {

    const title = ['Welcome, select an account type.',
        " Tell us more about you.",
        "Upload a profile picture.",
        "Secure your account.",
        "You're all set. Ready?"
    ]

    isActive = "step-title is-active";
    isInactive = "step-title"

    return (
            <div className="process-title">
                <h2 id="step-title-1" className={props.stage % 2 === 0 ? isActive : isInactive}>{title[props.stage]}</h2>
                <h2 id="step-title-1" className={props.stage % 2 === 1 ? isActive : isInactive}>{title[props.stage]}</h2>
            </div>
    )
}

export const ProcessPanel = (props) =>
    (
            <div className="outer-panel">
                <div className="outer-panel-inner">
                    <ProcessTitle stage={props.stage} />
                    <FirstPanel stage={props.stage} setStage={props.setStage} />
                    <SecondPanel stage={props.stage} setStage={props.setStage} />
                    <ThirdPanel stage={props.stage} setStage={props.setStage} />
                    <FourthPanel stage={props.stage} setStage={props.setStage} />
                    <FifthPanel stage={props.stage} />
                </div>
            </div>
    )


