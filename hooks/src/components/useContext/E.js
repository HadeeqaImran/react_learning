import React, {useContext} from 'react'
import F from './F'
import { UserContext, ChannelContext } from '../../App'

function E() {
    // Simpler way than the one implemented in F.js
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
  return (
    <div>
        {user} {channel}
        <F />
    </div>
  )
}

export default E