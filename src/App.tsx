import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonBadge,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  cartOutline,
  homeOutline,
  menuOutline,
  personOutline,
} from "ionicons/icons";
import Home from "./pages/home/Home";
import Person from "./pages/person/Person";
import Cart from "./pages/cart/Cart";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import React from "react";
import Login from "./pages/login/Login";
import Menu from "./pages/menu/Menu";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet animated>
          <Route exact path="/home" component={Home} />
          <Route exact path="/person" component={Person} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={() => <Redirect to="/login" />} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon aria-hidden="true" icon={homeOutline} />
          </IonTabButton>
          <IonTabButton tab="person" href="/person">
            <IonIcon aria-hidden="true" icon={personOutline} />
          </IonTabButton>
          <IonTabButton tab="cart" href="/cart">
            <IonBadge color="danger">11</IonBadge>
            <IonIcon aria-hidden="true" icon={cartOutline} />
          </IonTabButton>
          <IonTabButton tab="menu" href="/menu">
            <IonIcon aria-hidden="true" icon={menuOutline} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
