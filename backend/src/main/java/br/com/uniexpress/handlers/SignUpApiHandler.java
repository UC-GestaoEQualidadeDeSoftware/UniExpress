package br.com.uniexpress.handlers;

import br.com.uniexpress.db.UserDAO;
import br.com.uniexpress.models.SignUpModel;
import com.google.gson.Gson;
import io.undertow.server.HttpHandler;
import io.undertow.server.HttpServerExchange;
import io.undertow.server.handlers.BlockingHandler;
import io.undertow.util.Headers;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

public class SignUpApiHandler implements HttpHandler {

    private final static Gson SERIALIZER = new Gson();
    private final static String API_DEFAULT_RESPONSE_MIME_TYPE = "application/json";

    public static BlockingHandler instance() throws IOException {
        return new BlockingHandler(new SignUpApiHandler());
    }

    @Override
    public void handleRequest(HttpServerExchange httpServerExchange) throws Exception {
        httpServerExchange.getResponseHeaders().put(Headers.CONTENT_TYPE, API_DEFAULT_RESPONSE_MIME_TYPE);
        byte[] body = httpServerExchange.getInputStream().readAllBytes();
        String json = new String(body, StandardCharsets.UTF_8);
        SignUpModel model = SERIALIZER.fromJson(json, SignUpModel.class);
//        UserDAO dao = new UserDAO();
//        dao.save(model);
        httpServerExchange.setStatusCode(204);
    }

}
