import React from 'react';

const PageHeader = ({ pageHeaderTitle, pageHeaderCopy }) => {
  return (
    <div className="page-header">
      <h1 className="page-header__title">{pageHeaderTitle}</h1>
      <p className="page-header__copy">{pageHeaderCopy}</p>
    </div>
  )
};

export default PageHeader;
