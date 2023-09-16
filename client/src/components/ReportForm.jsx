import React from 'react'
import '../stylesheets/ReportForm.css'

const ReportForm = () => {
    return (
        <div className="daily-report-container">
            <div class="daily-report-card">
                <div class="daily-report-card-image">
                    <h2 class="daily-report-card-heading">
                        Daily Report
                    </h2>
                </div>
                <form class="daily-report-card-form">
                    <div className = "lhs">
                        <div class="input">
                            <input type="text" class="input-field" value="" required />
                            <label class="input-label">Number of Security Breaches</label>
                        </div>
                        <div class="input">
                            <input type="text" class="input-field" value="" required />
                            <label class="input-label">Violent Combat</label>
                        </div>
                        <div class="input">
                            <input type="password" class="input-field" required />
                            <label class="input-label">Injuries</label>
                        </div>
                        <div class="input">
                            <input type="password" class="input-field" required />
                            <label class="input-label">Deaths</label>
                        </div>
                    </div>
                    <div className = "rhs">
                        <div class="input">
                            <textarea type="password" class="input-field" rows = "3" required />
                            <label class="input-label">Concerns</label>
                        </div>
                        <div class="input">
                            <textarea type="password" class="input-field" rows = "3" required />
                            <label class="input-label">Response Summary</label>
                        </div>
                    </div>
                    <div class="action">
                        <button class="action-button">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ReportForm