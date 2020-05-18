import { Router } from '@vaadin/router';

export const switchRoute = (route) => {
  document.dispatchEvent(new CustomEvent('switched-route', {
    bubbles: true,
    composed: true,
    detail: route
  }));

  Router.go(`/${route}`);
}
