﻿using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;
using WebAPI.Repositories;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly EmployeeRepository _employeeRepository;

        public EmployeeController(EmployeeRepository employeeRepository)
        {
            _employeeRepository = employeeRepository;
        }

        [HttpGet]
        public JsonResult Get()
        {
            return new JsonResult(_employeeRepository.Read());
        }
        
        [HttpPost]
        public JsonResult Post(Employee emp)
        {
            _employeeRepository.Create(emp);
            return new JsonResult("Created Successfully");
        }
    }
}