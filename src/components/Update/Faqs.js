import {IconButton, TextField, Typography, Box } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const Faqs = ({ faqs, setFaqs , defaultValue}) => {
    const handleAddFaq = () => {
        const list = [...faqs]
        setFaqs([...faqs, { title: '', description: '' }])
    }

    const handleRemoveFaq = (index) => {
        const list = [...faqs]
        list.splice(index, 1)
        setFaqs(list)
    }

    const handleFaqChange = (e,index) => {
        const {name, value} = e.target

        const list = [...faqs]
        list[index][name] = value

        setFaqs(list)
    }

    return (
        <>
            <Typography>Faqs</Typography>
            {defaultValue.map((item, index) => (
                <Box key={index}>
                    <TextField
                        defaultValue={item.title}
                        name="title"
                        sx={{ marginBottom: 1, marginTop: 1 }}
                        variant="outlined"
                        label="Title"
                        fullWidth
                        onChange={(e) => handleFaqChange(e, index)} />

                    <TextField
                        name="description"
                        defaultValue={item.description}
                        sx={{ marginBottom: 1, marginTop: 1 }}
                        variant="outlined"
                        label="Description"
                        fullWidth
                        onChange={(e) => handleFaqChange(e, index)} />

                    {faqs.length - 1 === index ?
                        <IconButton onClick={handleAddFaq}>
                            <AddCircleIcon />
                        </IconButton> : <IconButton onClick={handleRemoveFaq}>
                            <CancelIcon />
                        </IconButton>}

                </Box>
            ))}
        </>
    );
}

export default Faqs;