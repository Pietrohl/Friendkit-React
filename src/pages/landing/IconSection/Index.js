import {iconFeatures} from './IconFeatures';

export const IconSection = () => {

    return (
        <div class="section landing-wrapper icons-section">
            <div class="container">

                {iconFeatures.map(iconRow => (
                    <div id="icon-features" class="columns">
                        <div class="column is-hidden-mobile"></div>
                        {iconRow.map(icon => (
                            <div class="column is-3">
                                <div class="landing-icon-box">
                                    <img src={icon.src} alt="" />
                                    <h3>{icon.title}</h3>
                                    <p>{icon.span}</p>
                                </div>
                            </div>
                            ))}
                            <div class="column is-hidden-mobile"></div>
                        </div>
                        )
                        )}
                       
                    </div>
        </div>

    )
}