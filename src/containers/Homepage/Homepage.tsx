import { Typography } from '@material-ui/core';
import * as React from 'react';
import { Button, Hello, Textfield } from '../../components';
import { Content } from './Homepage.style';

interface IHomepageState {
    username: string;
};

interface IHomepageProps {
    username: string;
    usernameCreate: (data: string) => void;
};


class Homepage extends React.Component<IHomepageProps, IHomepageState> {
    constructor(props: any) {
        super(props);
        this.state = {
            username: null,
        };
    }

    private handleChange = (event: any) => this.setState({ username: event.target.value });

    private handleUsernameCreate = () => {
        const username: string = this.state.username;
        this.props.usernameCreate(username);
    };

    render() {
        return (
            <div>
                <Content>
                    <Typography variant='h2'>Component state + local store management</Typography>
                </Content>
                <Content>
                    <Textfield isRequired={true} onChange={this.handleChange} label='Enter your username' />
                    {this.state.username !== null && 
                        <Hello username={this.state.username} />
                    }
                </Content>
                {this.state.username !== null &&
                    <Content>
                        <Button variant="outlined" onClick={this.handleUsernameCreate}>Add my username to local store</Button>
                    </Content>
                }
                {this.props.username !== '' &&
                    <Content>
                        Your username is registered into local store as: <strong>{this.props.username}</strong>
                    </Content>
                }
            </div>
        );
    };
};

export { Homepage };
