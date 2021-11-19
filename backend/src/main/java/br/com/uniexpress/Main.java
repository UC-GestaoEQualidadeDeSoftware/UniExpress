package br.com.uniexpress;

import br.com.uniexpress.handlers.LoginApiHandler;
import br.com.uniexpress.handlers.SignUpApiHandler;
import io.undertow.Undertow;
import io.undertow.server.HttpHandler;
import io.undertow.server.RoutingHandler;

public class Main {

    public static void main(String[] args) throws Exception {

        HttpHandler ROUTES = new RoutingHandler()
                .post("/login", LoginApiHandler.instance())
                .post("/sign-up", SignUpApiHandler.instance());

        Undertow.builder()
                .addHttpListener(8080, "localhost")
                .setHandler(ROUTES)
                .build()
                .start();
    }

}
