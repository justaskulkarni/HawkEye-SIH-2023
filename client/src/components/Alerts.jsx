import React from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

const Alerts = () => {
    return (
        <>
            <Stack sx={{ width: '83vw' }} spacing={2}>
                <Alert severity="error">
                    <AlertTitle>Alert Type: Security Breach</AlertTitle>
                    <strong>Location:</strong> Wagah Border (Indo-Pak Border)<br />
                    <strong>Time & Date:</strong> 04:20 AM, September 20, 2023<br />
                    <strong>Message:</strong> Object tracking system breached at Wagah Border. Unauthorized individuals observed RUNNING across the border.
                </Alert>
                <Alert severity="error">
                    <AlertTitle>Alert Type: High Priority</AlertTitle>
                    <strong>Location:</strong> Tawang (Indo-China Border)<br />
                    <strong>Time & Date:</strong> 02:40 AM, September 20, 2023<br />
                    <strong>Message:</strong>  Object tracking along the Tawang Border identified multiple individuals CRAWLING in restricted areas. Activate ML-based REIDENTIFICATION for potential threats.
                </Alert>
                <Alert severity="warning">
                    <AlertTitle>Warning Type: Environmental Hazard</AlertTitle>
                    <strong>Location:</strong> Siachen Glacier (Indo-China Border)<br />
                    <strong>Time & Date:</strong> 01:00 AM, September 20, 2023<br />
                    <strong>Message:</strong>  Adverse weather conditions affecting border surveillance towers' visibility. ML-based object tracking accuracy may be compromised. Exercise caution during inclement weather.
                </Alert>
                <Alert severity="error">
                    <AlertTitle>Alert Type: Urgent</AlertTitle>
                    <strong>Location:</strong> Dawki Border (Indo-Bangladesh Border)<br />
                    <strong>Time & Date:</strong> 12:30 AM, September 20, 2023<br />
                    <strong>Message:</strong> Unauthorized JUMPING over the Dawki Border detected. Activate ML-based REIDENTIFICATION for potential threats.
                </Alert>
                <Alert severity="warning">
                    <AlertTitle>Warning Type: Equipment Malfunction</AlertTitle>
                    <strong>Location:</strong> Moreh Border Crossing (Indo-Myanmar Border)<br />
                    <strong>Time & Date:</strong> 11:50 AM, September 19, 2023<br />
                    <strong>Message:</strong> Technical malfunctions reported in border security equipment at the Moreh Border Crossing. Immediate maintenance required. Ensure equipment reliability.
                </Alert>
            </Stack>
        </>
    )
}

export default Alerts