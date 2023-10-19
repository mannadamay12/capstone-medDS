import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { SvgIcon } from '@mui/material';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import TextField from '@mui/material/TextField';
import { padding } from '@mui/system';
import FormControl from '@mui/material/FormControl';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius:"10px",
    boxShadow: 24,
    p: 4,
};

export default function AddNoteButton() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div style={{border:'none'}}>
            <Button startIcon={(
                <SvgIcon fontSize="small">
                    <PlusIcon />
                </SvgIcon>
            )}
                variant="contained" onClick={handleOpen}>Add new note</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h5" component="h2">
                        Enter details
                    </Typography>
                    <div style={{ margin: "20px 0px 10px 0px" }}>
                        <FormControl fullWidth>
                            <TextField
                                id="outlined-multiline-static"
                                label="Multiline"
                                multiline
                                rows={4}
                                defaultValue="Default Value"
                            />
                        </FormControl>
                    </div>
                    <Button variant="contained">Submit</Button>


                </Box>
            </Modal>
        </div>
    );
}
