import React from 'react';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  useEffect(() => {
    const onPageLoad = () => {
      //LOADING SCREEN
      setTimeout(() => {
        document.querySelector('#loading-screen').classList.add('close');
      }, 300);
    };
    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);
  return (
    <>
      <div id="loading-screen" className="">
        <div className="loading-screen__content">
          <div className="boxes">
            <div className="box">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>

            <div className="box">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>

            <div className="box">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="box">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
