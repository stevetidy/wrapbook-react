import React from 'react';

const PageHeader = ({pageHeaderTitle, pageHeaderCopy}) => {
  return (
    <div class="page-header">
      <h1 class="page-header__title">{pageHeaderTitle}</h1>
      <p class="page-header__copy">{pageHeaderCopy}</p>
    </div>
  )
};

export default PageHeader;