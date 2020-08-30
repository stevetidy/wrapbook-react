import React, { useRef, useState } from 'react';

const Invite = () => {
  // copyToClipboard function taken from:
  // https://stackoverflow.com/a/42844911
  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess('...Copied!');
    setTimeout(() => {
      setCopySuccess('');
    }, 2500);
  };

  return (
    <>
      <div className="invite">
        <picture className="invite__pict">
          <img className="invite__img" src="https://robohash.org/sederroreveniet.png?size=150x150&amp;set=set1" alt="" />
        </picture>
        <h2 className="invite__title">Invite people to this project</h2>
        <p className="invite__copy">Share the following link with your team to have them sign up and send you their invoices.</p>
        <p className="invite__link">https://wrapbook.com/i/j93kda92</p>
        <button onClick={copyToClipboard} className="button button--copy">Copy to clipboard{copySuccess}</button>
      </div>
      <button onClick={copyToClipboard} className="button button--copy button--invite-mobile">Invite someone to Wrapbook{copySuccess}</button>
      <form className="visuallyhidden">
        <textarea
          readOnly
          name="invite-link"
          id="invite-link"
          ref={textAreaRef}
          defaultValue="https://wrapbook.com/i/j93kda92"
        />
      </form>
    </>
  );
}

export default Invite;