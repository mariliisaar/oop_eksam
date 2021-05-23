import React, { useEffect } from 'react';

const Questionnaire = () => {
    useEffect (() => {
        document.title = 'Küstimustike haldamine';
    });

    return (
        <div>
            <h1>Küsimustike haldamine</h1>
        </div>
    );
};

export default Questionnaire;