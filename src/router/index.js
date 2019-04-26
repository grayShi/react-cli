import React from 'react';
import FormContainer from '../components/container/FormContainer';
import { BrowserRouter, Route } from 'react-router-dom';

const routes = [
  {
    path: '/',
    name: '首页',
    exact: true,
    component: FormContainer
  },
  {
    path: '/about',
    name: '首页',
    component: () => (<div>about</div>)
  },
  {
    path: '/topics',
    name: '首页',
    component: () => (<div>topics</div>)
  }
];


class Routers extends React.Component {
  render() {
    return (
      <BrowserRouter>
        {routes.map((route, index) => {
          return (
            <Route component={route.component}
                exact={route.exact}
                key={index}
                path={route.path}
            />
              );
        })}
      </BrowserRouter>
    );
  }
}

export default Routers;