import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 5,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Customer = ({ customers }) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const navigate = useNavigate();

  const handleClick = (e, id) => {
    e.preventDefault();
    navigate(`/rewards/${id}`);
  };
  return (
    <>
      {customers.map((customer) => {
        return (
          <Card
            className={classes.root}
            key={customer.id}
            style={{ margin: 'auto' }}
          >
            <CardContent>
              <Typography
                className={classes.title}
                color='textSecondary'
                gutterBottom
              >
                Customer name
              </Typography>
              <Typography variant='h5' component='h2'>
                {customer.name}
                {bull}
                {customer.lastName}
              </Typography>
              <Typography className={classes.pos} color='textSecondary'>
                E-mail
              </Typography>
              <Typography variant='body2' component='p'>
                {customer.email}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size='small'
                variant='contained'
                onClick={(e) => {
                  handleClick(e, customer.id);
                }}
              >
                View Rewards
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
};

export default Customer;
