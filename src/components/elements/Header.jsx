import React from 'react';
import { Link } from '@reach/router';

import RMDBLogo from '../images/reactMovie_logo.png';
import TMDBLogo from '../images/tmdb_logo.svg';

import { StyledHeader, StyledRMDBLogo, StyledTMDBLogo } from '../styles/StyledHeader'

const Header = () => (
    <StyledHeader>
        <div className='header-content'>
            <Link to="/">
                <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo" />
                <StyledTMDBLogo src={TMDBLogo} alt="Tmdb-logo" />
            </Link>
        </div>
    </StyledHeader>
)

export default Header;