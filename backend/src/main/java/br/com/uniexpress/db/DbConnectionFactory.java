package br.com.uniexpress.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DbConnectionFactory {

    private static final String URL = "jdbc:mysql://localhost:3306/uniexpress";
    private static final String usuario = "root";
    private static final String senha = "example";

    public Connection getConnection() {
        try {
            return DriverManager.getConnection(URL, usuario, senha);
        } catch (SQLException excecao) {
            throw new RuntimeException(excecao);
        }
    }

}
