import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container } from "@mui/material";

import { Button, Grid, TextField, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";

import FileBase from 'react-file-base64'

import Faqs from "../components/Update/Faqs";
import Instructions from "../components/Update/Instructions";
import Categories from "../components/Update/Categories";
import Blogs from "../components/Update/Blogs";
import CircularProgress from '@mui/material/CircularProgress';

const Update = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [postData, setPostData] = useState(null)

    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://foooodify.herokuapp.com/api/foods/${id}`)
            .then((res) => res.json())
            .then((data) => setPostData(data))
    }, []);

    const [title, setTitle] = useState()
    const [banner, setBanner] = useState()
    const [video, setVideo] = useState()
    const [faqs, setFaqs] = useState([])
    const [instructions, setInstructions] = useState([])
    const [categories, setCategories] = useState([])
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        setData({
            banner : banner,
            title: title,
            faqs: faqs,
            instructions: instructions, 
            categories: categories, 
            blogs: blogs,
            video : video
        })
    }, [title, banner, ,video, faqs, instructions, categories, blogs]);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(postData ? postData : null)

        fetch(`https://foooodify.herokuapp.com/api/foods/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(data)
        }).then(() => navigate('/'))
    }

    return (
        <Container sx={{ pt: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}
        >
            { postData ? <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            name="title"
                            defaultValue={postData.title}
                            sx={{ marginBottom: 1 }}
                            variant="outlined"
                            label="Title"
                            fullWidth
                            onChange={(e) => {
                                setData({...data, title: e.target.value})
                            }} />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <div>
                            <Typography>Choose File for banner</Typography>
                            <FileBase
                                type="file"
                                multiple={false}
                                onDone={({ base64 }) => setBanner(base64)} />
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <div>
                            <Typography>Choose File for Video</Typography>
                            <FileBase
                                type="file"
                                multiple={false}
                                onDone={({ base64 }) => setData(base64)} />
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Categories defaultValue={postData.categories}  categories={categories} setCategories={setCategories}/>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Faqs defaultValue={postData.faqs} faqs={faqs} setFaqs={setFaqs}/>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Instructions defaultValue={postData.instructions} instructions={instructions} setInstructions={setInstructions}/>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Blogs defaultValue={postData.blogs} blogs={blogs} setBlogs={setBlogs}/>
                    </Grid>
                </Grid>
                <Button sx={{mt: 3}} type="submit" variant="contained">Submit</Button>
            </form> : <CircularProgress color="success" />}
        </Container>
    );
}
 
export default Update;