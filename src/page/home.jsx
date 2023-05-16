import { Button } from 'antd';
import React from 'react'

const Home = () => {

    function openAllkons() {
        window.open("http://demoallkonsfamily.allkons.com/sign-in?appid=70804335-f552-4035-9656-037509b63be0");
        // window.focus();
    }

    return (
        <>
            AllkonsID
            <Button onClick={openAllkons}>AllkonsID</Button>
        </>
    )
}

export default Home