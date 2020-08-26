import React from 'react';
import Card from './Card';

// Two approaches 
const CardList = ( {robots} ) => {
  if (true) {
    throw new Error('NOOOOOOOOO!');
  }

  // Approach 1
  //  Note: if not using => (), then need to return, like this:
  //   robots.map( (robot, index) => { return ( <Card ... > ) })
  return (
  	<>
  	  	{
	  	    robots.map( (robot, index) => (
			    	<Card 
			    		key={robot.id} 
			    		id={robot.id} 
			    		name={robot.name} 
			    		email={robot.email}
			    	/>
	  	    ) )
  		}
  	</>
  )

  //  Approach 2
  // const cardsArray = robots.map( (user, i) => {
  // 	return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
  // })

  // return (
  // 	<>
  // 		{cardsArray}
  // 	</>
  // )

} 

export default CardList;
