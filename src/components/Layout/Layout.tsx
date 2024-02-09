import React from 'react';
import TodoApp from '../TodoApp/TodoApp';

interface ILayoutProps {
    children?: React.ReactElement;
}

const Layout: React.FC<ILayoutProps> = (props: ILayoutProps) => {
    return (
        <div className="container max-w-full h-screen flex flex-col bg-veryLightGray">
            <img src='../../../bg-desktop-light.jpg' className='bg-no-repeat bg-cover w-full' />
            <TodoApp />
        </div>
    );
}

export default Layout;