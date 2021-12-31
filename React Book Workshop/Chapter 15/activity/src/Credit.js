import React from 'react';

const Credit = ({CreditsList}) => {
  if (CreditsList == null) return <div>nothing here</div>;

  return (
    <div>
    {CreditsList.map((credit,I) =>(
      <li key={I}>
        <div>{credit.name}</div>
        <div>
          <img width="70"src ={`https://image.tmdb.org/t/p/original${credit.profile_path}`} alt={credit.name}/>
        </div>
      </li>
    ))}
    </div>
  )
};

export default Credit;