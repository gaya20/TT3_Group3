import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
const API_KEY = '895Z21koZEasz7rGcQnPw9Z3BgZUoTln4Lnda9jH';
const httpUrl = 'https://849rs099m3.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function TradeAssets() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    amount: 0.0,
    orderType: '',
  });
  const [message, setMessage] = useState('');
  const orderTypes = [
      'BUY',
      'SELL'
  ]
  const handleChangeForm = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const onSubmit = async () => {
    setMessage('');
    const data = {
        accountKey: 'e049e315-7ec7-483c-b41d-0f37121e2550',
        assetAmount: values.amount,
        orderType: values.orderType 
    }
    try {
          const response = await fetch(httpUrl, {
              method: 'POST',
              mode: 'cors',
              headers: {
                  'x-api-key': API_KEY,
              },
              body: JSON.stringify(data)
          });
          await response.json();
          setMessage('Success!');
      } catch (error) {
          setMessage(error);
          return console.log(error);
      }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
            Execute Trade
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="amount"
            label="Amount ($)"
            name="amount"
            autoFocus
            onChange={handleChangeForm('amount')}
          />
          <InputLabel id="roleLabel" className="inputLabel">
            Select Order Type
          </InputLabel>
          <Select
            variant="outlined"
            labelId="roleLabel"
            required
            id="controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            onChange={handleChangeForm('orderType')}
            margin="normal"
            fullWidth
          >
            {orderTypes.map(type => {
              return (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              );
            })}
          </Select>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={() => onSubmit()}
          >
              Trade
          </Button>
        </form>
        </div>
        {
            message == '' ? null : <Typography>{message}</Typography>
        }
    </Container>
  );
}