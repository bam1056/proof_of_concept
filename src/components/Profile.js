import React, { Component } from 'react'
import { Card, CardImage, Heading, Text, Panel } from 'rebass'
import { Box } from 'reflexbox'

class Profile extends Component {
  static propTypes = {
    user: React.PropTypes.object
  }
  render () {
    return <div className='profile'>
      <Box mt={6} flex flexColumn align='center' justify='center'>
        <Card rounded width={300}>
          <CardImage src='https://upload.wikimedia.org/wikipedia/commons/0/07/Avatar_girl_face.png' style={{maxWidth: 300}} />
          <Heading level={2} size={3}>
            {this.props.user.name}
          </Heading>
          <Panel>
            <Text>
              <strong>Email:</strong> {this.props.user.email}
            </Text>
          </Panel>
          <Panel>
            <Text>
              <strong>Company:</strong> {this.props.user.company}
            </Text>
          </Panel>
          <Panel>
            <Text>
              <strong>Bio:</strong> {this.props.user.bio}
            </Text>
          </Panel>
        </Card>
      </Box>
    </div>
  }
}
export default Profile
