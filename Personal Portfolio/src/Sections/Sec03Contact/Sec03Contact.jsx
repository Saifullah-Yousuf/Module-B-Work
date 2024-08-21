import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Styles from './Sec03Contact.module.css';

const Sec03Contact = () => {
  return (
    <Box id="contact" className={Styles.formContainer}>
      <form className={Styles.form}>
        <div className={Styles.formGroup}>
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            fullWidth
            required
            InputLabelProps={{ className: Styles.inputLabel }}
            InputProps={{
              className: Styles.input,
            }}
          />
        </div>
        <div className={Styles.formGroup}>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            required
            InputLabelProps={{ className: Styles.inputLabel }}
            InputProps={{
              className: Styles.input,
            }}
          />
        </div>
        <div className={Styles.formGroup}>
          <TextField
            id="textarea"
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            required
            InputLabelProps={{ className: Styles.inputLabel }}
            InputProps={{
              className: Styles.textarea,
            }}
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          className={Styles.submitBtn}
        >
          Send Message
        </Button>
      </form>
    </Box>
  );
};

export default Sec03Contact;
