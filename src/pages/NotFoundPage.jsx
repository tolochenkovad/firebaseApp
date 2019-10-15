import React from 'react';
import { Route } from 'react-router-dom';
import {BRAND} from "../constans/constans";
import ErrorWrap from "../common/errors/ErrorWrap";
import Title from "../common/title/Title";

const NotFoundPage = () => (
    <Route
        render={({ staticContext }) => {
            if (staticContext) {
                staticContext.statusCode = 404;
            }
            return (
                <div>
                    <Title description={BRAND.desc} title={`${BRAND.name} - Page Not Found`} />
                    <ErrorWrap title="404" desc="Oops, Page Not Found :(" />
                </div>
            );
        }}
    />
);

export default NotFoundPage
