import { Route} from 'react-router-dom';
import { useEffect } from 'react';

const PriveRoute = (props) => {
    useEffect(() => {
        if (!props.auth) {
            props.history.push("/login");
        }
    }, [props.auth]);
    return (
        <Route {...props} />
    );
}