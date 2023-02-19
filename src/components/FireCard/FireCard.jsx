import React from "react";
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import './style.css';

export default function FireCard ({ key, title, date, time, location, description }){
    return (
        <Card className="card" key={key}>
            <CardHeader
                title={title}
                subheader={location}
            />
            <CardContent className="description">
                <p>
                      {description}
                </p>
                <p>
                  
                    {date}<br></br>
                    {time}
                </p>
            </CardContent>
        </Card>

    );


}