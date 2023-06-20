import React from 'react';
import Main from '../components/Main';
import Row from '../components/Row';
import Button from '../components/Button';
import requests from '../Requests';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const { user } = UserAuth();
    const navigate = useNavigate();
    if (!user) {
        navigate('/login');
    }

    return (
        <>
            {user && (
                <>
                    <Main />
                    <Row rowID="1" title="Up Coming" fetchURL={requests.requestUpComing} />
                    <Row rowID="2" title="Popular" fetchURL={requests.requestPopular} />
                    <Row rowID="3" title="Top Rated" fetchURL={requests.requestTopRated} />
                    <Row rowID="4" title="Now Playing" fetchURL={requests.requestNowPlaying} />
                    <Button />
                </>
            )}
        </>
    );
};

export default Home;
