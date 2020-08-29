import React from 'react';

const Invite = ({ inviteLink, copyInviteLink }) => {
  return (
    <div className="invite">
      <picture className="invite__pict">
        <img className="invite__img" src="https://robohash.org/sederroreveniet.png?size=150x150&amp;set=set1" alt="" />
      </picture>
      <h2 className="invite__title">Invite people to this project</h2>
      <p className="invite__copy">Share the following link with your team to have them sign up and send you their invoices.</p>
      <p className="invite__link"><a className="invite__link-href" href={inviteLink}>{inviteLink}</a></p>
      <button onClick={copyInviteLink} className="button button--copy">Copy to clipboard</button>
    </div>
  );
}

export default Invite;