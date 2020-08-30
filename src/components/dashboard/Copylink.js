// Taken from: https://stackoverflow.com/a/42844911
import React, { useRef, useState } from 'react';

const Copylink = () => {
  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess('Copied!');
    setTimeout(() => {
      setCopySuccess('');
    }, 2000);
  };

  return (
    <>
      {
        /* Logical shortcut for only displaying the 
           button if the copy command exists */
        document.queryCommandSupported('copy') &&
        <div>
          <button onClick={copyToClipboard}>Copy</button>
          {copySuccess}
        </div>
      }
      <form>
        <textarea
          className="invite__link"
          name="invite-link"
          id="invite-link"
          ref={textAreaRef}
          value='https://wrapbook.com/i/j93kda92'
        />
      </form>
      <button onClick={copyToClipboard} className="button button--copy">Copy to clipboard {copySuccess}</button>
      <button onClick={copyToClipboard} className="button button--copy button--invite-mobile">Invite someone to Wrapbook {copySuccess}</button>
    </>
  );
}

export default Copylink;