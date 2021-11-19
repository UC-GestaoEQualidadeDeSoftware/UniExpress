package br.com.uniexpress.handlers;

import br.com.uniexpress.db.UserDAO;
import br.com.uniexpress.models.LoginModel;
import br.com.uniexpress.models.SignUpModel;
import com.google.gson.Gson;
import io.undertow.server.HttpHandler;
import io.undertow.server.HttpServerExchange;
import io.undertow.server.handlers.BlockingHandler;
import io.undertow.util.Headers;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

public class LoginApiHandler implements HttpHandler {

    private final static Gson SERIALIZER = new Gson();
    private final static String API_DEFAULT_RESPONSE_MIME_TYPE = "application/json";

    public static BlockingHandler instance() throws IOException {
        return new BlockingHandler(new LoginApiHandler());
    }

    @Override
    public void handleRequest(HttpServerExchange httpServerExchange) throws Exception {
        httpServerExchange.getResponseHeaders().put(Headers.CONTENT_TYPE, API_DEFAULT_RESPONSE_MIME_TYPE);
        byte[] body = httpServerExchange.getInputStream().readAllBytes();
        String json = new String(body, StandardCharsets.UTF_8);
        LoginModel model = SERIALIZER.fromJson(json, LoginModel.class);
        UserDAO dao = new UserDAO();
        SignUpModel result = dao.login(model);
        httpServerExchange.getResponseSender().send(SERIALIZER.toJson(result));
    }

}
