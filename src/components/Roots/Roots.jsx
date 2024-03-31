import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import Navber from '../Nav/Navber';

const Roots = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Navber/>
            <Outlet/>
        </div>
    );
};

export default Roots;