import * as React from 'react';
import { Link } from 'react-router-dom';
import userData from './mockedData';
/* {this.props.match.params.id} use this to filter or choose a user/form/whatever by its unique identifier.
Or you can send a sharepoint request in the 'componentWillMount' or 'componentDidMount' of the component below,
this way it can directa user to his own items in web app. By giving him a unique link like :
 ...hpe.sharepoint.com/teams/..../home/user/[user name/id/whatever] where
{this.props.match.params.id} is equal to [user name/id/whatever].
*/

class User extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            user: {}
        };
    }

    componentDidMount() {
        /* do your filtering here with this.props.match.params.id, we'll get the user by name in this example*/
        this.setState({
            user: userData.getUser(this.props.match.params.name) 
            /* this.props.match.params.name has to match the parameter in the url */
        });
    }

    componentDidUpdate(prevProps: any) { 
    /* we need this or if we change the route by typing a different name on top we won't get rediracted to the user */
        if (this.props.location !== prevProps.location) {
            this.setState({
                user: userData.getUser(this.props.match.params.name)
            });
        }
      }

    render() {
        let user = this.state.user;
        if (user !== undefined) {
            return (

                <div className="container">
                    <p> Hi, I'm {this.state.user.name}</p>
                    <p> I am {this.state.user.age} years old</p>
                    <p> My occupation is {this.state.user.occupation} </p>
                    <p>{`My occupation is ${this.state.user.occupation} and i wrote this using string interpolation `}
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals"
                            target="_blank"
                        >
                            find more about it here
                        </a>
                    </p>
                    <Link to="/">Go Back to Home </Link>
                </div>
            );

        } else {
            return (
                <div>No user found</div>
            );
        }
    }
}

export default User;