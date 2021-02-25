import React from 'react'
import {Link,Route} from 'react-router-dom'
import Match from './Match'

function Category({match,history}) {
    console.log(history)
    return (
    <div> <ul className='nav-link'>
        <button onClick={()=>history.push('/products')}>goBack</button>
    <li><Link  to={`${match.url}/shoes`}>Shoes</Link></li>
    <li><Link  to={`${match.url}/boots`}>Boots</Link></li>
    <li><Link  to={`${match.url}/footwear`}>Footwear</Link></li>
             </ul>
  <Route path={`${match.path}/:name`} render={({match})=><div>{match.params.name}</div>}/>

  
  </div>
    )
}

export default Category
