using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using VirtualTrainees.Models;

namespace VirtualTrainees.Manager
{
    public class EmployeeManager
    {
        public ResponseModel Save(Employee employee)
        {
            using (VirtualTraineesEntities db = new VirtualTraineesEntities())
            {
                db.Employees.Add(employee);
                db.SaveChanges();
            }
            return new ResponseModel();
        }

        public ResponseModel GetAll()
        {
            using (VirtualTraineesEntities db = new VirtualTraineesEntities())
            {
                List<Employee> employees = db.Employees.ToList();

                return new ResponseModel()
                {
                    Data = employees
                };
            }
        }
    }
}