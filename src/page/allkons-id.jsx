import React from 'react'
import { useLocation } from 'react-router-dom';

function AllkonsID() {
    const search = useLocation().search;
    const access_token = new URLSearchParams(search).get('access_token');
console.log('access_token :>> ', access_token);
    return (
        <div>
            AllkonsID {access_token}
        </div>
    )
}

export default AllkonsID