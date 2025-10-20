import { Navigate } from 'react-router-dom';
import { Layout } from '../index';


const ProtectedRoute = ({children, requiredItemKey, redirectPath}) => {
    console.log(requiredItemKey);

    const requiredItem = sessionStorage.getItem(String(requiredItemKey));
    console.log(requiredItem);
    if ( requiredItem ) {
        return children;
    } else {
        return <Navigate to={redirectPath} />;
    }

};

export default ProtectedRoute;