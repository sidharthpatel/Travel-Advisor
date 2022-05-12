import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";

import useStyles from "./styles";

const Map = () => {
    const classes = useStyles();

    /* isMobile var will be set to false if the width of the device is greater than 600 px. */
    const isMobile = useMediaQuery("(min-width: 600px)");

    const coordinates = { lat: 0, lng: 0 };

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: "AIzaSyBk3csiK2-tXjbZkuxXimgygDzvh2EFgas",
                }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={""}
                onChange={""}
                onChildClick={""}
            ></GoogleMapReact>
        </div>
    );
};

export default Map;
