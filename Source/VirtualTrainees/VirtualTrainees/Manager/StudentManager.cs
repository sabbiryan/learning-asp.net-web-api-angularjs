using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using VirtualTrainees.Models;

namespace VirtualTrainees.Manager
{
    public class StudentManager
    {
        public ResponseModel Save(Student student)
        {
            using (VirtualTraineesEntities db = new VirtualTraineesEntities())
            {
                db.Students.Add(student);
                db.SaveChanges();
            }
            return new ResponseModel();
        }

        public ResponseModel GetAll()
        {
            using (VirtualTraineesEntities db = new VirtualTraineesEntities())
            {
                List<Student> students = db.Students.ToList();
                
                return new ResponseModel()
                {
                    Data = students
                };
            }
        }
    }
}