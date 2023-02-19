import React from "react";
import { Card } from '@mui/material';
import { CardContent } from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import './style.css';

export default function FireCard ({ title, date, time, location, description }){
    return (
        <Card>
            <CardHeader
                title={title}
                subheader={location}
            />
            <CardContent>
                <h2>
                    {date}<br></br>
                    {time}
                </h2>
                <p>
                    {description}
                </p>
            </CardContent>
        </Card>

    );


}