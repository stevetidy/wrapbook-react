import React from 'react';

const SectionHeader = (props) => {
  return (
    <div className="page-header">
      <h1 className="page-header__title">{props.sectionHeaderTitle}</h1>
      <p className="page-header__copy">{props.sectionHeaderCopy}</p>
    </div>
  )
};

export default SectionHeader;
