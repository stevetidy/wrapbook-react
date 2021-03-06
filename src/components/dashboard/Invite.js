import React, { useRef, useState } from 'react';

const Invite = () => {
  // copyToClipboard function taken from:
  // https://stackoverflow.com/a/42844911
  const [copySuccess, setCopySuccess] = useState(false);
  const textAreaRef = useRef(null);
  const linkCopySuccessTxt = 'Link Copied!';
  const linkCopyCtaTxtDesktop = 'Copy to clipboard';
  const linkCopyCtaTxtMobile = 'Invite someone to Wrapbook';

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
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
        <p><span className="invite__link">https://wrapbook.com/i/j93kda92</span></p>
        <button onClick={copyToClipboard} className="button button--copy">{copySuccess ? linkCopySuccessTxt : linkCopyCtaTxtDesktop}</button>
      </div>
      <button onClick={copyToClipboard} className="button button--copy button--invite-mobile">{copySuccess ? linkCopySuccessTxt : linkCopyCtaTxtMobile}</button>
      <form className="visuallyhidden">
        <label htmlFor="invite-link">Invite Link</label>
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
