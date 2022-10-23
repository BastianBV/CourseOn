import { React, useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Stack from '@mui/material/Stack';

const ModalUrl = () => {
    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Stack sx={{ width: 80, mr:0, flexDirection:'row'}}>
      <Button onClick={handleOpen} sx={{mt:2,mb:1}}>
        <YouTubeIcon sx={{ fontSize: 120}}/>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Inserta una URL</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="url"
            label="URL"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Guardar</Button>
        </DialogActions>
      </Dialog>
      </Stack>
    </>
  )
}

export default ModalUrl