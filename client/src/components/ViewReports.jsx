import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import '../stylesheets/ViewReports.css'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function ViewReports() {
    const [spacing, setSpacing] = React.useState(2);
    const reports = [
        {
            date: '20/09/2023',
            location: 'Wagah Border',
            breaches: 8,
            violentCombat: 'Yes',
            injuries: 5,
            deaths: 2,
            concerns: 'Challenges in AI/ML-based object tracking and reidentification',
            summary:
                'The situation at Wagah Border on 20/09/2023 was tense, with 8 security breaches and incidents of violent combat. There have been 5 reported injuries and 2 deaths. We are actively addressing challenges in AI/ML-based object tracking and reidentification.'
        },
        {
            date: '20/09/2023',
            location: 'Kashmir Border',
            breaches: 12,
            violentCombat: 'Yes',
            injuries: 8,
            deaths: 3,
            concerns: 'Advancements in AI for border security',
            summary:
                'On 21/09/2023, the Kashmir Border witnessed 12 security breaches and violent combat. There were 8 injuries and 3 fatalities. We are exploring advancements in AI to enhance border security.'
        },
        {
            date: '20/09/2023',
            location: 'Bhutan Border',
            breaches: 5,
            violentCombat: 'No',
            injuries: 0,
            deaths: 0,
            concerns: 'None',
            summary:
                'On 02/10/2023, the Bhutan Border remained peaceful however reported 5 security breaches with no violent combat, injuries, or deaths.'
        },
        {
            date: '20/09/2023',
            location: 'Nepal Border',
            breaches: 8,
            violentCombat: 'Yes',
            injuries: 3,
            deaths: 2,
            concerns: 'Enhancing reidentification techniques',
            summary:
                'On 26/09/2023, the Nepal Border faced 8 security breaches and violent combat. There were 3 injuries and 2 fatalities. We are dedicated to enhancing reidentification techniques in border security.'
        },
        {
            date: '20/09/2023',
            location: 'Indo-China Border',
            breaches: 10,
            violentCombat: 'Yes',
            injuries: 5,
            deaths: 1,
            concerns: 'Increased aggression from China',
            summary:
                'The Indo-China Border reported 10 security breaches on 22/09/2023, accompanied by violent combat. There were 5 injuries and 1 fatality. We are actively researching AI advancements to improve border surveillance and object tracking.'
        },
        {
            date: '20/09/2023',
            location: 'Myanmar Border',
            breaches: 7,
            violentCombat: 'Yes',
            injuries: 4,
            deaths: 1,
            concerns: 'Real-time activity monitoring',
            summary:
                'The Myanmar Border reported 7 security breaches on 28/09/2023, accompanied by violent combat. There were 4 injuries and 1 fatality. Our priority is real-time activity monitoring using computer vision.'
        }
    ];
    const classes = useStyles();

    return (
        <>
        <Grid container className={classes.root} spacing={2} style={{ width: '83vw', overflowY: 'auto', overflowX: 'hidden' }}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={spacing}>
                    {reports.map((report, index) => (
                        <Grid key={index} item>
                            <Paper className={classes.paper} style={{ width: '300px', height: '520px', backgroundColor: '#D3E7FF', marginTop: '20px' }}>

                                <div key={index}>
                                    <p className="report-header">
                                        {report.date} {report.location}
                                    </p>
                                    <p className="report-paragraph">
                                        <strong>No of security breaches:</strong> {report.breaches}
                                    </p>
                                    <p className="report-paragraph">Violent Combat: {report.violentCombat}</p>
                                    <p className="report-paragraph">No of Injuries to soldiers: {report.injuries}</p>
                                    <p className="report-paragraph">No of Deaths: {report.deaths}</p>
                                    <p className="report-paragraph">Concerns: {report.concerns}</p>
                                    <p className="report-paragraph">Response Summary: {report.summary}</p>
                                </div>

                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
        </>
    );
}
