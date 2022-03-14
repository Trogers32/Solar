using System;
using System.Data.SqlClient;

public class SQLService
{
    private readonly ILogger<SQLService> _logger;

    public SQLService(ILogger<SQLService> logger)
    {
            _logger = logger;
    }

    private void TestConnection(object sender, EventArgs e)
    {
        string connetionString = "";
        SqlConnection cnn = new SqlConnection(connetionString);
        try
        {
            cnn.Open();
            _logger.LogInformation("Connection opened.");
            cnn.Close();
        }
        catch (Exception ex)
        {
            _logger.LogInformation($"Can not open connection! Exception: {ex}");
        }
    }
}
