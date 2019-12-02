using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Study_React.Models;

namespace Study_React.Models
{
    public class StudyManager 
    {
        private readonly IDataRepository _dataRepository;

        public StudyManager(IDataRepository repository)
        {
            _dataRepository = repository;
        }

        public IEnumerable<string> Get()
        {

            return _dataRepository.Get();
        }

        public Study Get(string id)
        {
            
            return _dataRepository.Get(id);
        }

      

        
    }
}
