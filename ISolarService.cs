using System;

public interface ISolarService
{
    public void CreateRecord(Record newRecord);
    public Record ReadRecord(int recordId);
    public List<Record> GetAllRecords(int personId);
    public void DeleteRecord(int recordId);
    public void UpdateRecord(int recordId, Record newRecord);
}
