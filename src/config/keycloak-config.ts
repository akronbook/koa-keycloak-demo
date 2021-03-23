import KeycloakConnect from "../keycloak-koa-connect/index";
import bodyStore from "../keycloak-koa-connect/stores/body-store";
import queryStore from "../keycloak-koa-connect/stores/query-store";

export const keycloak = new KeycloakConnect({ store: [queryStore, bodyStore,] }, {
    "realm": "Demo-Realm",
    "auth-server-url": "http://localhost:8080/auth",
    "resource": "nodejs-microservice",
    "credentials": {
        "secret": "1c6fe190-835f-40d7-ac8d-abc232623353"
    }
});

