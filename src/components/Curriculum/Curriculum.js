import React from 'react';
import CurriculumPDF from '../../static/img/CV-- ANDREA PALMERA.pdf';
import './Curriculum.css';

const Curriculum = () => {
    return (
        <section className="curriculum" id="curriculum">
            <h3 className="section-title">
                <span className="simbol-2">{'<'}</span> Curriculum <span className="simbol-2">{'/>'}</span>
            </h3>
            <a href={CurriculumPDF} download="CV-Andrea-Palmera" rel="noopener noreferrer" target="_blank" className="curriculum-download">
                Download
            </a>
        </section>
    );
};
export default Curriculum;
