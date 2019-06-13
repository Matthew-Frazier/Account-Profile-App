// This way IS using hooks______________________________________________________
// AccountContent from AccountProvider.js needs to be exported for this to work

import React, { useContext, } from 'react';
import { AccountContext, } from '../providers/AccountProvider';
import { Card, } from 'semantic-ui-react';

const Account = () => {
  // const value = useContext(AccountContext);
  const { username, dateJoined, membershipLevel, } = useContext(AccountContext);

  return(
    <Card>
      <Card.Content>
        <Card.Header>{username}</Card.Header>
        <Card.Meta>
          Date Joined: {dateJoined}
        </Card.Meta>
      </Card.Content>
      <Card.Content>
        <p>Membership Level: {membershipLevel}</p>
      </Card.Content>
    </Card>
  )
};

export default Account;


// // This is NOT using hooks_____________________________________________________

// import React from 'react';
// import { AccountConsumer, } from '../providers/AccountProvider';
// import { Card, } from 'semantic-ui-react';

// const Account = () => (
//   <AccountConsumer>
//     { value => (
//       <Card>
//         <Card.Content>
//           <Card.Header>{value.username}</Card.Header>
//           <Card.Meta>
//             Date Joined: {value.dateJoined}
//           </Card.Meta>
//         </Card.Content>
//         <Card.Content>
//           <p>Membership Level: {value.membershipLevel}</p>
//         </Card.Content>
//       </Card>
//     )}
//   </AccountConsumer>
// );

// export default Account;