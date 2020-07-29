import React from 'react';
import './OtherInformation.css';

export default class OtherInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayBlockSkills: false,
            displayBlockInterests: false,
            displayBlockLanguages: false,
        };
    }

    showSkillsSwitch = () => {
        this.setState({
            displayBlockSkills: !this.state.displayBlockSkills,
        });
    };
    showInterestsSwitch = () => {
        this.setState({
            displayBlockInterests: !this.state.displayBlockInterests,
        });
    };
    showInterestsLanguages = () => {
        this.setState({
            displayBlockLanguages: !this.state.displayBlockLanguages,
        });
    };

    render() {
        return (
            <div className="other-information">
                <div className="other-information-container">
                    <button className="other-information-button" onClick={this.showSkillsSwitch}>
                        Skills
                    </button>
                    <ul className={!this.state.displayBlockSkills ? 'display-none' : 'other-information-content'}>
                        <div className="list-separator">
                            <li>
                                <i className="fas fa-check-double"></i> HTML
                            </li>
                            <li>
                                <i className="fas fa-check-double"></i> CSS
                            </li>
                            <li>
                                <i className="fas fa-check-double"></i> SASS
                            </li>
                            <li>
                                <i className="fas fa-check-double"></i> BOOTSTRAP
                            </li>
                            <li>
                                <i className="fas fa-check-double"></i> GIT
                            </li>
                        </div>
                        <div className="list-separator">
                            <li>
                                <i className="fas fa-check-double"></i> SOURCETREE
                            </li>
                            <li>
                                <i className="fas fa-check-double"></i> JAVASCRIPT
                            </li>
                            <li>
                                <i className="fas fa-check-double"></i> REACT
                            </li>
                            <li>
                                <i className="fas fa-check-double"></i> REACT NATIVE <br></br>(currently learning)
                            </li>
                        </div>
                    </ul>
                </div>
                <div className="other-information-container">
                    <button className="other-information-button" onClick={this.showInterestsSwitch}>
                        Interests
                    </button>
                    <p className={!this.state.displayBlockInterests ? 'display-none' : 'other-information-content'}>
                        In my free time I like to paint, make collages, sculpture and other things related to the plastic arts. I consider myself a lover of
                        music and films.
                    </p>
                </div>
                <div className="other-information-container">
                    <button className="other-information-button" onClick={this.showInterestsLanguages}>
                        Languages
                    </button>
                    <ul className={!this.state.displayBlockLanguages ? 'display-none' : 'other-information-languages'}>
                        <li>
                            <i className="fas fa-check-double"></i> <span>Spanish:</span> Native.
                        </li>
                        <li>
                            <i className="fas fa-check-double"></i> <span>English:</span> Advance, spoken and written.
                        </li>
                        <li>
                            <i className="fas fa-check-double"></i> <span>Portuguese</span> Intermediate, spoken and written.
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
