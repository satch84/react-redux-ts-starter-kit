import * as React from 'react';

export interface IHelloProps {
    username: string;
};

const Hello: React.FC<IHelloProps> = ({ username }) => (
    <p>
        Hello I'm <strong>{username}</strong>! I am the component state!
    </p>
);

export { Hello };
