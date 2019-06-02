import React from 'react';
import Reader from '../Reader/Reader';
import MoviePage from '../MoviePage/MoviePage';
import Dashboard from '../Dashboard/Dashboard';

// import './App.css';
// import Profile from '../Profile/Profile';
// import Stats from '../Stats/Stats';
// import PricingPlan from '../PricingPlan/PricingPlan';
// import TransactionHistory from '../TransactionHistory/TransactionHistory';

// import USER1 from '../../Sources/user1.json';
// import USER2 from '../../Sources/user2.json';
// import STATS from '../../Sources/stats.json';
// import pricingPlanItems from '../../Sources/pricing-plan.json';
// import transactions from '../../Sources/transactions.json';

// console.log('USER1=', USER1);
// const {
//   name,
//   tag,
//   location,
//   avatar,
//   stats: { followers, views, likes },
// } = USER1;

// console.log('followers=', followers);
// console.log('stats=', USER1.stats);

function App() {
  return (
    <div>
      {/* <Reader /> */}
      {/* <MoviePage /> */}
      <Dashboard />
      {/* <h2> Profile component </h2> <Profile user={USER1} /> <br />
      <Profile user={USER2}> </Profile> <br />
      <h2> Stats component </h2> <Stats stats={STATS} /> <br />
      <h2> PricingPlan component </h2>
      <PricingPlan items={pricingPlanItems} /> <br />
      <h2> TransactionHistory component </h2>
      <TransactionHistory items={transactions} /> */}
    </div>
  );
}

export default App;
