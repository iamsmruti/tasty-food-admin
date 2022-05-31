import { Container, Grid } from "@mui/material";
import { useState, useEffect } from "react";

import ItemCard from "../components/ItemCard";
import CircularProgress from '@mui/material/CircularProgress';

const ViewAll = ({items}) => {
    return (
        <Container sx={{pt: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh'}}>
            {items ? <Grid container spacing={3}>

                {items.map((item) => (
                    <Grid key={item.title} item md={4} xs={12}>
                        <ItemCard item={item} />
                    </Grid>
                ))}
            </Grid> : <CircularProgress color="success" />}
        </Container>
    );
}

export default ViewAll;