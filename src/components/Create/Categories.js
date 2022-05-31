import {IconButton, TextField, Typography, Box } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';

import FileBase from 'react-file-base64'

import { useState } from "react";

const Categories = ({categories, setCategories, defaultValue}) => {
    const handleAddCategory = () => {
        const list = [...categories]
        setCategories([...categories, { title: '', img: '' }])
    }

    const handleRemoveCategory = (index) => {
        const list = [...categories]
        list.splice(index, 1)
        setCategories(list)
    }

    const handleCategoryImgChange = (base64,index) => {
        const list = [...categories]
        list[index]['img'] = base64
        setCategories(list)
    }


    const handleCategoryTextChange = (e,index) => {
        const {name, value} = e.target
        const list = [...categories]
        list[index][name] = value
        setCategories(list)
    }

    return (<>
        <Typography>Categories</Typography>
        {categories.map((item, index) => (
            <Box key={index}>
                <TextField
                    type={'input'}
                    defaultValue={item.title}
                    name="title"
                    sx={{ marginBottom: 1, marginTop: 1 }}
                    variant="outlined"
                    label="Title"
                    fullWidth
                    onChange={(e) => handleCategoryTextChange(e, index)} />
                <FileBase
                    name="img"
                    type="file"
                    multiple={false}
                    onDone={({base64}) => handleCategoryImgChange(base64, index)} />

                {categories.length - 1 === index ?
                    <IconButton onClick={handleAddCategory}>
                        <AddCircleIcon />
                    </IconButton> : <IconButton onClick={handleRemoveCategory}>
                        <CancelIcon />
                    </IconButton>}

            </Box>
        ))}
    </>);
}

export default Categories;