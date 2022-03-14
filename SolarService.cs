using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace solar.Services
{

    public class SolarService: ISolarService
    {
        public void CreateRecord(Record newRecord)
        {

        }
        public Record ReadRecord(int recordId)
        {
            Record personRecord = new Record();
            return personRecord;
        }
        public List<Record> GetAllRecords(int personId)
        {
            List<Record> personRecords = new List<Record>();
            return personRecords;
        }
        public void DeleteRecord(int recordId)
        {

        }
        public void UpdateRecord(int recordId, Record newRecord)
        {

        }
    }
}