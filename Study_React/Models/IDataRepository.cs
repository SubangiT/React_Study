using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Study_React.Models
{
    public interface IDataRepository
    {
        Study Get(string id);

        IEnumerable<string> Get();
    }
}
