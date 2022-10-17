import React from 'react';
import { AuthAndFrame } from '../components/AuthAndFrame';
import { NavProps } from '../components/ListItems';

const Dashboard: React.FC<NavProps> = (props) => {
  return (
    <AuthAndFrame selectedItem={props.selectedItem}>
      <div>
        {'Dashboard content is empty!'}
      </div>
    </AuthAndFrame>
  )
}


export default Dashboard;
