import React, { useState, forwardRef, useImperativeHandle } from "react";
import PropTypes from "prop-types";
import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
} from '@material-ui/core'

const SimpleConfirm = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);

  const [handleAgree, setHandleAgree] = useState(()=>{});
  const [handleDisagree, setHandleDisagree] = useState(()=>{});
  const [handleClose, setHandleClose] = useState(()=>{});
  const resetHandle = () => {
    setHandleAgree(()=>{});
    setHandleDisagree(()=>{});
    setHandleClose(()=>{});
    setOpen(false);
  };

  useImperativeHandle(ref, () => ({
    confirm: () => new Promise((resolve, reject) => {
      setHandleAgree(() => () => {
        resetHandle();
        resolve(true);
      });
      setHandleDisagree(() => () => {
        resetHandle();
        resolve(false);
      });
      setHandleDisagree(() => () => {
        resetHandle();
        resolve(false);
      });
      setOpen(true);
    }),
  }));

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
    <DialogTitle id="alert-dialog-title" align="center">{props.title||'確認'}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {props.message||'本当によろしいですか？'}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleAgree} color={props.agree_color||'primary'} autoFocus>
        {props.agree_text||'OK'}
      </Button>
      <Button onClick={handleDisagree} color={props.disagree_color||'primary'}>
        {props.disagree_text||'キャンセル'}
      </Button>
    </DialogActions>
  </Dialog>
  );
});

SimpleConfirm.propTypes = {
  title    : PropTypes.string,
  message  : PropTypes.string,
  disagree_text  : PropTypes.string,
  disagree_color : PropTypes.string,
  agree_text     : PropTypes.string,
  agree_color    : PropTypes.string,
};

export default SimpleConfirm;
