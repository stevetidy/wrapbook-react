import React, { useEffect, useState } from 'react';
import PageHeader from '../page-header/PageHeader';
import Invite from './Invite';
import List from './List';
import withListLoading from './withListLoading';

// Inspired by: https://www.smashingmagazine.com/2020/06/rest-api-react-fetch-axios/
const Dashboard = () => {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    users: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://cors-anywhere.herokuapp.com/https://castcrew.herokuapp.com/people`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((users) => {
        setAppState({ loading: false, users: users });
      });
  }, [setAppState]);

  return (
    <main className="main-content main-content--dashboard">
      <div className="logged-in-content">
        <PageHeader 
          pageHeaderTitle="Your company dashboard"
          pageHeaderCopy="Manage people, view history &amp; see how your projects are doing."
        />
        <div className="dashboard">
          <div className="dashboard__users">
            <ListLoading isLoading={appState.loading} users={appState.users} />
          </div>
          <aside className="dashboard__aside">
            <Invite />
          </aside>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
