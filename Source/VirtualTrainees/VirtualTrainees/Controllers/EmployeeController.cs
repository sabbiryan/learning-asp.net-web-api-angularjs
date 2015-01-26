using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json;
using VirtualTrainees.Manager;
using VirtualTrainees.Models;

namespace VirtualTrainees.Controllers
{
    public class EmployeeController : ApiController
    {
        EmployeeManager employeeManager = new EmployeeManager();

        public ResponseModel Get()
        {
            return employeeManager.GetAll();
        }

        public ResponseModel Post(Object data)
        {
            Employee employee = JsonConvert.DeserializeObject<Employee>(data.ToString());

            return employeeManager.Save(employee);

        }
    }
}
