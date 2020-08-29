import React from 'react';
import sprite from '../../assets/svg/sprite.svg';

const List = (props) => {
  const { users } = props;
  if (!users || users.length === 0) return <p>No users, sorry</p>;
  return (
    <>
      {
        users.collection.map((user) => {
          return (
            <div className="user" key={user.id}>
              <a className="user__link" href={`/user/${user.id}`}>
                <div className="user__media">
                  <picture className="user__pict">
                    <img className="user__img" src={user.avatar} alt="" />
                  </picture>
                  <div className="user__media-copy">
                    <h2 className="user__name">{user.name}</h2>
                    <p className="user__info">{user.position} • {user.job_title}</p>
                  </div>
                  <svg className="user__media-icon icon icon--chevron"><use href={sprite + "#icon-chevron"}></use></svg>
                </div>
                <ul className="user__expenses">
                  <li className="user__expenses-item"><svg className="icon icon--expense"><use href={sprite + "#icon-clock"}></use></svg> Pending: ${user.payments.pending}</li>
                  <li className="user__expenses-item"><svg className="icon icon--expense"><use href={sprite + "#icon-clipboard"}></use></svg> Approved: ${user.payments.approved}</li>
                  <li className="user__expenses-item"><svg className="icon icon--expense"><use href={sprite + "#icon-expense"}></use></svg> Paid: ${user.payments.paid}</li>
                </ul>
                <ul className="user__status">
                  <li className={`user__status-item ${user.account_created}`}>Account created</li>
                  <li className={`user__status-item ${user.onboarded}`}>Onboarded</li>
                </ul>
              </a>
            </div>
          );
        })
      }
    </>
  );
};

export default List;
