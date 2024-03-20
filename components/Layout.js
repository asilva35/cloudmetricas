import React from 'react';
import MainNavigation from './MainNavigation';

export default function Layout({ id = '', children }) {
  return (
    <>
      <div id={id} className="wrapper">
        <MainNavigation></MainNavigation>
        {children}
      </div>
    </>
  );
}
