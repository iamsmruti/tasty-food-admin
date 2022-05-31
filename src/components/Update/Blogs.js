import {IconButton, TextField, Typography, Box } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';

import FileBase from 'react-file-base64'

const Blogs = ({blogs, setBlogs, defaultValue}) => {
    const handleAddBlog = () => {
        const list = [...blogs]
        setBlogs([...blogs, { title: '', img: '' }])
    }

    const handleRemoveBlog = (index) => {
        const list = [...blogs]
        list.splice(index, 1)
        setBlogs(list)
    }

    const handleBlogImgChange = (base64,index) => {
        const list = [...blogs]
        list[index]['img'] = base64
        setBlogs(list)
    }


    const handleBlogTextChange = (e,index) => {
        const {name, value} = e.target
        const list = [...blogs]
        list[index][name] = value
        setBlogs(list)
    }

    return (
        <>
            <Typography>Blogs</Typography>
            {defaultValue.map((item, index) => (
                <Box key={index}>
                    <TextField
                        name="title"
                        defaultValue={item.title}
                        sx={{ marginBottom: 1, marginTop: 1 }}
                        variant="outlined"
                        label="Title"
                        fullWidth
                        onChange={(e) => handleBlogTextChange(e, index)} />
                    <FileBase
                        name="img"
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => handleBlogImgChange(base64, index)} />

                    {blogs.length - 1 === index ?
                        <IconButton onClick={handleAddBlog}>
                            <AddCircleIcon />
                        </IconButton> : <IconButton onClick={handleRemoveBlog}>
                            <CancelIcon />
                        </IconButton>}

                </Box>
            ))}
        </>
    );
}

export default Blogs;