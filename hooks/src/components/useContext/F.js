import React from 'react'
import {UserContext, ChannelContext} from '../../App'


function F() {
  return (
    <div>
        <UserContext.Consumer>
            {
                user => {
                    return (
                        <ChannelContext.Consumer>
                            {
                                channel => {
                                    return <div>User Context: {user}, channel context value {channel}</div>
                                }
                            }
                        </ChannelContext.Consumer>
                    )
                }
            }
        </UserContext.Consumer>
    </div>
  )
}

export default F