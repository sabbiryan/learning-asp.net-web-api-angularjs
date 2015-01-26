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
    public class StudentController : ApiController
    {
        StudentManager studentManager = new StudentManager();

        public ResponseModel Get()
        {
            return studentManager.GetAll();
        }

        public ResponseModel Post(Object data)
        {
            Student student = JsonConvert.DeserializeObject<Student>(data.ToString());

            return studentManager.Save(student);
            
        }
    }

}
