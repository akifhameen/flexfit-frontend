import React, { useState } from 'react';
import './addAdmin.css';
import ReusableSearch from '../admin_options/reusableSearch';
import AdminList from './adminList';

const AddAdmin = () => {
  const [admin, setAdmin] = useState('');
  return (
    <div class='addTrainer__main-div'>
      <div class='addTrainer__sub-div'>
        <p>Add Admin</p>
        <div class='search-bar-div'>
          <ReusableSearch />
        </div>
        <div class='search-list-div'>
          <AdminList />
        </div>
      </div>
    </div>
  );
};

export default AddAdmin;
