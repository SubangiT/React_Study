using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using Study_React.Models;
using Microsoft.IdentityModel.Protocols;

namespace Study_React.Models
{
    public class StudyJsonReader : IDataRepository
    {
        IConfiguration _iconfiguration;

        public StudyJsonReader(IConfiguration iconfiguration)
        {
            _iconfiguration = iconfiguration;
        }

        public IEnumerable<string> Get()
        {
            //string path = @"C:\Users\thars\Desktop\Studies";
            var path = _iconfiguration["JSONFilePath"];

            IEnumerable<string> studyFiles = Directory.GetFiles(path, "*.json");
            var guidList = studyFiles.Select(o => Path.GetFileNameWithoutExtension(o));
            return guidList;
        }

        public Study Get(string studyGuid)
        {
            var path = _iconfiguration["JSONFilePath"]+ @"\" + studyGuid + ".Json";
            //string path = @"C:\Users\thars\Desktop\Studies\" + studyGuid + ".json";
            using (StreamReader r = new StreamReader(path))
            {
                string json = r.ReadToEnd();
                try
                {
                    var data = JsonConvert.DeserializeObject<Study>(json);
                    return data;
                }
                catch (Exception ex)
                {
                    throw ex;
                   
                }
            }
        }

      

      
    }
}
