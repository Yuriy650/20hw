import React from 'react';
import {Avatar, Grid} from "@material-ui/core";
import countLikes from "../../Redux/Actions/counter-action";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import {addNewAuthor} from "../../Redux/Actions/action";
import {connect} from "react-redux";

const Like = ({countValue, countLikes}) => {
    console.log(countValue)
    return (
        <Grid align={'left'}>
            <Avatar className="avatarStyle" >
                <FavoriteRoundedIcon />
                <button onClick={() => countLikes()}>{countValue.count}</button>
            </Avatar>

        </Grid>
    )
}
const mapStateToProps = (state) => {
    return {
        countValue: state.count,
    };
};

export default connect(mapStateToProps, {countLikes})(Like)