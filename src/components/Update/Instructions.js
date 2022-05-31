import {IconButton, TextField, Typography, Box } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const Instructions = ({ instructions, setInstructions , defaultValue}) => {
    const handleAddInstruction = () => {
        const list = [...instructions]
        setInstructions([...instructions, { title: '', description: '' }])
    }

    const handleRemoveInstruction = (index) => {
        const list = [...instructions]
        list.splice(index, 1)
        setInstructions(list)
    }

    const handleInstructionChange = (e,index) => {
        const {name, value} = e.target

        const list = [...instructions]
        list[index][name] = value

        setInstructions(list)
    }

    return (
        <>
            <Typography>Instructions</Typography>
            {defaultValue.map((item, index) => (
                <Box key={index}>
                    <TextField
                        name="title"
                        defaultValue={item.title}
                        sx={{ marginBottom: 1, marginTop: 1 }}
                        variant="outlined"
                        label="Title"
                        fullWidth
                        onChange={(e) => handleInstructionChange(e, index)} />

                    <TextField
                        name="description"
                        defaultValue={item.description}
                        sx={{ marginBottom: 1, marginTop: 1 }}
                        variant="outlined"
                        label="Description"
                        fullWidth
                        onChange={(e) => handleInstructionChange(e, index)} />

                    {instructions.length - 1 === index ?
                        <IconButton onClick={handleAddInstruction}>
                            <AddCircleIcon />
                        </IconButton> : <IconButton onClick={handleRemoveInstruction}>
                            <CancelIcon />
                        </IconButton>}

                </Box>
            ))}
        </>
    );
}

export default Instructions;