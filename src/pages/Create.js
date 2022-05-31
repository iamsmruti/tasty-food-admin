import { Button, Container, Grid, TextField, Typography } from "@mui/material";

import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import FileBase from 'react-file-base64'

import Faqs from "../components/Create/Faqs";
import Instructions from "../components/Create/Instructions";
import Categories from "../components/Create/Categories";
import Blogs from "../components/Create/Blogs";

const Create = () => {
    const navigate = useNavigate()
    const [postData, setPostData] = useState({
        banner: '', title: '', categories: [], faqs: [], video: '', instructions: [], blogs: []
    })

    const [title, setTitle] = useState('')
    const [banner, setBanner] = useState('')
    const [video, setVideo] = useState('')
    const [faqs, setFaqs] = useState([{title: '', description: ''}])
    const [instructions, setInstructions] = useState([{title: '', description: ''}])
    const [categories, setCategories] = useState([{title: '', img: ''}])
    const [blogs, setBlogs] = useState([{title: '', img: '', description: ''}])

    useEffect(() => {
        setPostData({
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
        console.log(postData)

            fetch('https://foooodify.herokuapp.com/api/foods/create', {
                method: 'POST',
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(postData)
            }).then(() => navigate('/'))
    }

    console.log(categories)

    return (
        <Container sx={{ pt: 2 }}>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            name="title"
                            sx={{ marginBottom: 1 }}
                            variant="outlined"
                            label="Title"
                            fullWidth
                            onChange={(e) => {
                                setTitle(e.target.value)
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
                                onDone={({ base64 }) => setVideo(base64)} />
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Categories categories={categories} setCategories={setCategories}/>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Faqs faqs={faqs} setFaqs={setFaqs}/>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Instructions instructions={instructions} setInstructions={setInstructions}/>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Blogs blogs={blogs} setBlogs={setBlogs}/>
                    </Grid>
                </Grid>

                <Button sx={{mt: 3}} type="submit" variant="contained">Submit</Button>
            </form>
        </Container>
    );
}

export default Create;