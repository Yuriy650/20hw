import React from "react";
import {TextField, Paper, Grid} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
//import {store} from "../../store";
import {connect} from "react-redux";
import {addNewAuthor} from "../../Redux/Actions/action";
//import {rootReducer} from "../../Redux/rootReducer";
export const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
export const PostImage = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
export const YODA = "https://upload.wikimedia.org/wikipedia/hu/thumb/4/45/Yoda.jpg/250px-Yoda.jpg";
export const YODA_POST = "https://th.bing.com/th/id/OIP.uQEGqKR6Rn2e0PAR8rHZsgHaEL?w=308&h=180&c=7&o=5&dpr=1.25&pid=1.7";


const CreatePost = (props) => {
    const paperStyle = {
        padding: 20, height: '75vh', width: 600,
        margin: '20px auto', background: '#ffe107'
    };
    const textFieldStyle = {margin: '15px auto'};
    const nameStyle = {width: 296, margin: '15px 2px', padding: 0};
    const buttonStyle = {margin: '15px auto'};

    const handleOnSubmit = (e) => {
        e.preventDefault();
        //console.log(e);
        const newAuthorPost = {
            id: Math.floor(Math.random() * 1000),
            name: e.target[0].value,
            photo: e.target[4].value,
            nickname: e.target[2].value,
            content: e.target[5].value,
            image: e.target[7].value,
            date: e.target[9].value
        }
        console.log(newAuthorPost);
        props.addNewAuthor(newAuthorPost);
        e.target[0].value = '';
        e.target[2].value = '';
        e.target[4].value = '';
        e.target[5].value = '';
        e.target[7].value = '';
        e.target[9].value = '';


    }
    return (
        <Grid>
            <Paper elevation={15} style={paperStyle}>
                <Grid align={'center'}>
                    <h2>Create Post</h2>
                </Grid>
                <form onSubmit={handleOnSubmit}>
                    <TextField style={nameStyle} name='author' id='author' label='Authors name' type='text'
                               placeholder='Author' variant='outlined' fullWidth/>
                    <TextField style={nameStyle} name='nick-name' id='last' label='Nick-name' type='text'
                               placeholder='Nickname' variant='outlined' fullWidth/>
                    <InputLabel id="demo-controlled-open-select-label">My Photo</InputLabel>
                    <Select style={textFieldStyle} native id='avatarka' labelId="demo-controlled-open-select-label">
                        <option aria-label="None" value=""/>
                        <option id='1' value='ANAKIN_IMAGE'>ANAKIN</option>
                        <option id='2' value='YODA'>YODA</option>
                    </Select>
                    <TextField style={textFieldStyle} name='text' id='post' label='new text' type='text'
                               placeholder='New text' variant='outlined' fullWidth/>
                    <TextField style={textFieldStyle} name='image' id='image' label='Add post image' type='text'
                               placeholder='New Post Image' variant='outlined' fullWidth/>
                    <InputLabel id="date">Date</InputLabel>
                    <TextField style={textFieldStyle} labelId="test"
                               id="date"
                               type="date"/>
                    <Button style={buttonStyle} type='submit' variant="outlined" color='primary' fullWidth>Post</Button>
                </form>
            </Paper>
        </Grid>

    )

}
const mapDispatchToProps = {
    addNewAuthor
};


export default connect(null, mapDispatchToProps)(CreatePost);