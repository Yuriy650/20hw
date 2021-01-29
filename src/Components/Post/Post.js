import React from 'react';
import './Post.css';
import {connect} from "react-redux";
import {addNewAuthor} from "../../Redux/Actions/action";
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import countLikes from "../../Redux/Actions/counter-action";
import {Avatar, Grid} from "@material-ui/core";
import Like from "../Like/Like";
function Post({state, countValue, countLikes}) {
    console.log(state);
        return (
       <div>
           {state.authors.map((items) => {
               return (
               <div className="newPost">
                   <div className='authorInfo'>
                       <img className='ava' src={items.photo} alt='ava'/>
                       <div className='nickName'>
                           <p className='data'> {items.name}</p>
                           <p className='data'> {items.nickname}</p>
                           <p className='data'> {items.date}</p>
                       </div>
                   </div>
                   <div className='postInfo'>
                       <p className='content'> {items.content}</p>
                       <img className='postImage' src={items.image} alt=''/>
                       <Grid align={'left'}>
                           <Avatar className="avatarStyle" onClick={() => countLikes()}>
                               <FavoriteRoundedIcon />
                               {countValue.count}

                           </Avatar>

                       </Grid>
                   </div>
               </div>
               )
           })}
       </div>
    )
}
const mapStateToProps = (state) => {
    return {
        countValue: state.count,
        state: state.authors
    };
};
export default connect(mapStateToProps, {addNewAuthor, countLikes})(Post)
