import { Button, PageHeader } from "antd";
import React from "react";
import HeaderPage from "../../components/header/header";
import {Link} from "react-router-dom";
const LandingPage = () => {
 return(
    <div className="container-landing-page">
        <div className="landing-hearder">
            <HeaderPage/>
        </div>
        <div className="btn-start-game">
           <Link to="/blankplayer">
                <Button type="primary">
                    Create game
                </Button>
           </Link>
        </div>
    </div>
 )
}
export default LandingPage
