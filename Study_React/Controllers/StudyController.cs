using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Study_React.Models;



namespace Study_React.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudyController : ControllerBase
    {
        private readonly ILogger<StudyController> _logger;

        private readonly IDataRepository _dataRepository;

        public StudyController(IDataRepository repository, ILogger<StudyController> logger)
        {
            _dataRepository = repository;
            _logger = logger;
        }


        [HttpGet("[action]")]
        public IActionResult Get()
        {
            try
            {
                var studyFiles = _dataRepository.Get();
                if (studyFiles == null || studyFiles.Count() == 0)
                    return NotFound();

                return Ok(studyFiles);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Get Study Information", null);
                return StatusCode(500, ex);
            }
        }


        [HttpGet("[action]/{studyGuid}")]
        public IActionResult GetStudyData(string studyGuid)
        {
            if (studyGuid == null || studyGuid == string.Empty)
                return BadRequest();
            try
            {
                var studyDetails = _dataRepository.Get(studyGuid);

                if (studyDetails == null)
                    return NotFound();

                return Ok(studyDetails);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Get Study Information", null);
                return StatusCode(500, ex);
            }
        }
    }
}