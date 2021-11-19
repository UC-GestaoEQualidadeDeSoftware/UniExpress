package br.com.uniexpress.db;

import br.com.uniexpress.models.LoginModel;
import br.com.uniexpress.models.SignUpModel;

import javax.swing.*;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class UserDAO {

    private Connection connection;
    PreparedStatement ps;

    public UserDAO() {
        this.connection = null;
        this.ps = null;
    }

    public void save(SignUpModel model)  {
        String sql = "INSERT INTO Users (name, email, password) VALUES(?,?,md5(?))";
        try {
            this.connection = (Connection) new DbConnectionFactory().getConnection();
            ps = connection.prepareStatement(sql);
            ps.setString(1, model.name);
            ps.setString(2, model.email);
            ps.setString(3, model.password);
            ps.execute();
        } catch (SQLException ex) {
            JOptionPane.showMessageDialog(null, "Erro ao inserir cliente no banco de dados!", "Erro", JOptionPane.ERROR_MESSAGE);
        } finally {
            try {
                if (ps != null) {
                    ps.close();
                }
                if (connection != null) {
                    connection.close();
                }
            } catch (Exception ex) {
                JOptionPane.showMessageDialog(null, "Erro ao fechar conexão do banco de dados!", "Erro", JOptionPane.ERROR_MESSAGE);
            }
        }

    }

    public SignUpModel login(LoginModel model) {
        String sql = "SELECT name, email, password FROM Users WHERE email = ? AND password = md5(?)";
        ResultSet rset = null;
        SignUpModel resultModel = new SignUpModel();
        try {
            this.connection = (Connection) new DbConnectionFactory().getConnection();
            ps = connection.prepareStatement(sql);
            ps.setString(1, model.email);
            ps.setString(2, model.password);
            rset = ps.executeQuery();
            rset.next();
            resultModel.name = rset.getString("name");
            resultModel.email = rset.getString("email");
            resultModel.password = rset.getString("password");

        } catch (Exception ex) {
            JOptionPane.showMessageDialog(null, "Erro ao ler clientes no banco de dados!", "Erro", JOptionPane.ERROR_MESSAGE);
        } finally {

            try {
                if (rset != null) {
                    rset.close();
                }
                if (ps != null) {
                    ps.close();
                }
                if (connection != null) {
                    connection.close();
                }
            } catch (Exception ex) {
                JOptionPane.showMessageDialog(null, "Erro ao fechar conexão do banco de dados!", "Erro", JOptionPane.ERROR_MESSAGE);
            }
        }
        return resultModel;
    }
}
