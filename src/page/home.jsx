import { Button } from 'antd';
import React from 'react';

const Home = () => {
    function openAllkons() {
        const url = "http://demoallkonsfamily.allkons.com/sign-in?appid=e77267cc-eecf-4492-b21c-4358d97d38b4";
        window.location.href = url;
    }

    return (
        <>
            AllkonsID
            <Button onClick={openAllkons}>AllkonsID</Button>
        </>
    )
}

export default Home