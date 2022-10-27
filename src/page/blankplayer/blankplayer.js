import { Button, PageHeader } from "antd";
import React from "react";
import HeaderPage from "../../components/header/header";
import {Link} from "react-router-dom";
const Blankplayer = () => {
 return(
    <div className="container-landing-page">
        <div className="landing-hearder">
            <HeaderPage/>
        </div>
        <div className="btn-start-game">
           <Link to="/newPlayer">
                <Button type="primary">
                    Add Player
                </Button>
           </Link>
        </div>
    </div>
 )
}
export default Blankplayer
