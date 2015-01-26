using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VirtualTrainees.Models
{

    public class ResponseModel
    {
        public ResponseModel(bool success=true, Object data = null, string message = "Success")
        {
            IsSuccess = success;
            Data = data;
            Message = message;
        }

        public bool IsSuccess { set; get; }
        public string Message { set; get; }
        public Object Data { set; get; }

    }
}