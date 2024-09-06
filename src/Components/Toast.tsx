import React, { useState, useEffect } from 'react';
import { Snackbar, Alert } from '@mui/material';

interface ToastProps {
  message: string;
  severity?: 'success' | 'error' | 'warning' | 'info';
  autoHideDuration?: number;
}

const Toast: React.FC<ToastProps> = ({
  message,
  severity = 'info',
  autoHideDuration = 3000,
}) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setOpen(false);
      }, autoHideDuration);

      return () => clearTimeout(timer);
    }

  }, [open, autoHideDuration]);

  return (
    <>
      {message && <Snackbar open={open} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert
          severity={severity}
          icon={false} // Removes the icon
          sx={{
            maxWidth: '90%',
            marginBottom: '8vh',
            backgroundColor: '#fff',
            color: '#000', // Text color
            boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
            fontSize: "0.6rem",
            textAlign: "center"
          }}
        >
          {message}
        </Alert>
      </Snackbar>}
    </>
  );
};

export default Toast;
