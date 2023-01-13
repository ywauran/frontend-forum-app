/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import { MdLogout } from 'react-icons/md';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Header({ authUser, signOut }) {
  const { id, avatar, name } = authUser;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section className="flex justify-between px-6 py-4 items-center" style={{ boxShadow: '0 1px 8px -3px rgba(0, 0, 0, 0.7)' }}>
      <nav>
        <h2 className="text-primary text-xl font-bold">Forum App</h2>
      </nav>
      <div className="avatar flex space-x-5 items-center">
        <h3 className="font-semibold text-lg">{name}</h3>
        <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={avatar} alt={id} title={name} />
        </div>
        <button className="hover:text-primary" type="button" onClick={handleClickOpen}><MdLogout className="text-2xl" /></button>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" align="center">
          Keluar
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Anda yakin ingin keluar ?
          </DialogContentText>
        </DialogContent>
        <div className="flex items-center justify-center">
          <DialogActions>
            <Button onClick={handleClose}>Tidak</Button>
            <Button onClick={signOut} autoFocus>
              Ya
            </Button>
          </DialogActions>
        </div>
      </Dialog>
    </section>
  );
}

const authUserShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

Header.propTypes = {
  // eslint-disable-next-line react/require-default-props
  authUser: PropTypes.shape(authUserShape),
  signOut: PropTypes.func.isRequired,
};

export default Header;
