import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Props = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

const Title = ({ title, description }) => (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
    </Helmet>
);

Title.propTypes = Props;

export default Title;
