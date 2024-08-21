import React from 'react';

const AppWrapAbout = (Component, idName, classNames) => (
  function HOC() {
    return (
      <div id={idName} className={`app__container__about ${classNames}`}>
        <div className="app__wrapper_about_screen app__flex">
          <Component />
        </div>
      </div>
    );
  }
);

export default AppWrapAbout;
