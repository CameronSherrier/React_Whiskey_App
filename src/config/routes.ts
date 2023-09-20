import whiskeyHome from '../pages/Home';
import whiskeyDashboard from '../pages/Dashboard';
import About from '../pages/About';

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string,
    protected: boolean
}

const routes: RouteType[] = [
    {
      path:"",
      component: whiskeyHome,
      name:"Whiskey Home page",
      protected: false,
    },
    {
      path:"/dashboard",
      component: whiskeyDashboard,
      name:"Dashboard",
      protected: true,
    },
    {
      path:"/about",
      component: About,
      name:"About",
      protected: false
    }
  ];

export default routes