import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const getPurchasesWithReward = (purchases) => {
  const purchasesWithReward = purchases.filter(
    (purchase) => parseInt(purchase.unitPrice) >= 50
  );
  return purchasesWithReward;
};

const getRewardPointsMonths = (purchases) => {
  let points = 0;
  return purchases.map((purchase) => {
    const arrayDate = purchase.date.split('/');
    if (parseInt(purchase.unitPrice) > 50) {
      points = points + 50;
    }
    if (parseInt(purchase.unitPrice) > 100) {
      points = (parseInt(purchase.unitPrice) - 100) * 2;
    }
    return {
      month: months[parseInt(arrayDate[0]) - 1],
      generatedPoints: points,
    };
  });
};

const getRewards = (rewardsByMonths) => {
  const rewards = Array.from(
    rewardsByMonths.reduce(
      (m, { month, generatedPoints }) =>
        m.set(month, (m.get(month) || 0) + generatedPoints),
      new Map()
    ),
    ([month, generatedPoints]) => ({ month, generatedPoints })
  );
  return rewards;
};

const Rewards = () => {
  let { id } = useParams();
  const state = useSelector((state) => state);
  const { customers } = state.customers;
  const [customer] = customers.filter((customer) => customer.id === id);

  const purchasesToCalculate = getPurchasesWithReward(customer.purchases);
  const rewardsByMonths = getRewardPointsMonths(purchasesToCalculate);
  const rewards = getRewards(rewardsByMonths);

  const totalReward = (rewardsByMonths) => {
    return rewardsByMonths.reduce(
      (acc, reward) => acc + reward.generatedPoints,
      0
    );
  };

  return (
    <>
      <Container maxWidth='md' sx={{ mt: 5, mb: 2 }}>
        <Grid>
          <Box textAlign='center'>
            <Button variant='outlined' size='large'>
              Hi {customer.name}, this are your reward points
            </Button>
          </Box>
          <Box textAlign='center' sx={{ mt: 2 }}>
            <Button variant='contained' sx={{ fontSize: '50px' }}>
              {totalReward(rewardsByMonths)}
            </Button>
          </Box>
          <Box textAlign='center' sx={{ mt: 2 }}>
            {rewards.map((reward) => {
              return (
                <Chip
                  key={reward.month}
                  avatar={<Avatar style={{ width: 50 }}>{reward.month}</Avatar>}
                  label={reward.generatedPoints}
                  variant='outlined'
                />
              );
            })}
          </Box>
          <Box textAlign='center' sx={{ mt: 2 }}>
            <Box component={Link} to='/' style={{ textDecoration: 'none' }}>
              <Button variant='outlined' sx={{ fontSize: '20px' }}>
                Go Home
              </Button>
            </Box>
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default Rewards;
