using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using VirtualTrainees.Models;

namespace VirtualTrainees.Manager
{
    public class TeacherManager
    {
        public ResponseModel Save(Teacher teacher)
        {
            using (VirtualTraineesEntities db = new VirtualTraineesEntities())
            {
                db.Teachers.Add(teacher);
                db.SaveChanges();
            }
            return new ResponseModel();
        }

        public ResponseModel GetAll()
        {
            using (VirtualTraineesEntities db = new VirtualTraineesEntities())
            {
                List<Teacher> teachers = db.Teachers.ToList();

                return new ResponseModel()
                {
                    Data = teachers
                };
            }
        }
    }
}