import {PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = ( props) => {
    return (
    <div style={{height:'100vh'}}>
      <PrettyChatWindow
      projectId='477ec2b9-4b11-4c99-92c1-db00b424ec68'
      username={props.user.username}
      secret={props.user.secret}
      style={{height:`100%`}}
      />
    </div>
    )
  }

  export default ChatsPage;