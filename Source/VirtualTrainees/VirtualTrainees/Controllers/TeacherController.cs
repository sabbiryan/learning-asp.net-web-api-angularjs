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
    public class TeacherController : ApiController
    {
        TeacherManager teacherManager = new TeacherManager();

        public ResponseModel Get()
        {
            return teacherManager.GetAll();
        }

        public ResponseModel Post(Object data)
        {
            Teacher teacher = JsonConvert.DeserializeObject<Teacher>(data.ToString());

            return teacherManager.Save(teacher);

        }
    }
}
