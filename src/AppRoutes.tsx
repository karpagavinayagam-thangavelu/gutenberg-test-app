
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {  Grid } from "@mui/material";
import { Trans } from "react-i18next";
const Landing = React.lazy(() => import("./pages/Landing"));
const Genre = React.lazy(() => import("./pages/Genre"));

export const AppRoutes: React.FC = () => (
    <BrowserRouter>
        <Grid item xs={12}>
            <Routes>
                <Route path="/" element={<Suspense fallback={<div><Trans i18nKey={"LoadingText"}>Loading...</Trans></div>}><Landing /></Suspense>} />
                <Route path="/landing" element={<Suspense fallback={<div><Trans i18nKey={"LoadingText"}>Loading...</Trans></div>}><Landing /></Suspense>} />
                <Route path="/:genreName" element={<Suspense fallback={<div><Trans i18nKey={"LoadingText"}>Loading...</Trans></div>}><Genre /></Suspense>} />
            </Routes>
        </Grid>
    </BrowserRouter>
);