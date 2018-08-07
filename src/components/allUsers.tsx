import * as React from 'react';
import { Link } from 'react-router-dom';
import userData from './mockedData';
/* {this.props.match.params.id} use this to filter or choose a user/form/whatever by its unique identifier.
Or you can send a sharepoint request in the 'componentWillMount' or 'componentDidMount' of the component below,
this way it can directa user to his own items in web app. By giving him a unique link like :
 ...hpe.sharepoint.com/teams/..../home/user/[user name/id/whatever] where
{this.props.match.params.id} is equal to [user name/id/whatever].
*/

class AllUsers extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            users: [],
        };
    }

    componentWillMount() {
        /* do your filtering here with this.props.match.params.id, we'll get the user by name in this example*/
        this.setState({
            users: userData.allUsers()
        });
    }

    render() {
        return (
            <div className="container">
                {
                    this.state.users.map((e: any, i: number) =>
                        <div key={i}>
                            <Link key={i} to={`${this.props.location.pathname}/user/${e.name}`}>
                                Visit {e.name}'s profile
                            </Link>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default AllUsers;