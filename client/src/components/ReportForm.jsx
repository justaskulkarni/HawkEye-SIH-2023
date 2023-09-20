import React, { useState } from 'react';
import Popup from '../components/Popup';
import '../stylesheets/ReportForm.css'

const ReportForm = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const handleButtonClick = () => {
        // Show the popup when the button is clicked
        setPopupOpen(true);
    };

    const handleClosePopup = () => {
        // Close the popup
        setPopupOpen(false);
    };
    return (
        <div className="daily-report-container">
            <div class="daily-report-card">
                <div class="daily-report-card-image">
                    <h2 class="daily-report-card-heading">
                        Daily Report
                    </h2>
                </div>
                <form class="daily-report-card-form">
                    <div className="lhs">
                        <div class="input">
                            <input type="text" class="input-field"  />
                            <label class="input-label">Number of Security Breaches</label>
                        </div>
                        <div class="input">
                            <input type="text" class="input-field"  />
                            <label class="input-label">Violent Combat</label>
                        </div>
                        <div class="input">
                            <input type="text" class="input-field"  />
                            <label class="input-label">Injuries</label>
                        </div>
                        <div class="input">
                            <input type="text" class="input-field" />
                            <label class="input-label">Deaths</label>
                        </div>
                    </div>
                    <div className="rhs">
                        <div class="input">
                            <textarea type="text" class="input-field" rows="3"  />
                            <label class="input-label">Concerns</label>
                        </div>
                        <div class="input">
                            <textarea type="text" class="input-field" rows="3"  />
                            <label class="input-label">Response Summary</label>
                        </div>
                    </div>
                    <div class="action">
                        <button class="action-button" onClick={handleButtonClick}>Submit</button>
                        <Popup
                            message="Form Submitted Successfully"
                            isOpen={isPopupOpen}
                            onClose={handleClosePopup}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ReportForm