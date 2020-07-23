import React from 'react';
import './OtherInformation.css';

const OtherInformation = () => {
    return (
        <div className="other-information">
            <div className="other-information-container">
                <button className="other-information-button">Skills</button>
                <ul className="other-information-content">
                    <div className="list-separator">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SASS</li>
                        <li>BOOTSTRAP</li>
                        <li>GIT</li>
                    </div>
                    <div className="list-separator">
                        <li>SOURCETREE</li>
                        <li>JAVASCRIPT</li>
                        <li>REACT</li>
                        <li>REACT NATIVE (currently learning)</li>
                    </div>
                </ul>
            </div>
            <div className="other-information-container">
                <button className="other-information-button">Interests</button>
                <p className="other-information-content">
                    In my free time I like to paint, make collages, sculpture and other things related to the plastic arts. I consider myself a lover of music
                    and films.
                </p>
            </div>
            <div className="other-information-container">
                <button className="other-information-button">Languages</button>
                <ul className="other-information-lenguages">
                    <li>
                        <span>Spanish:</span> Native.
                    </li>
                    <li>
                        <span>English:</span> Advance, spoken and written.
                    </li>
                    <li>
                        <span>Portuguese</span> Intermediate, spoken and written.
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default OtherInformation;
