using BL;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace Project_Lea.Controllers
{
    [ApiController]
    [Route("apilocation")]

    public class LocationController : Controller { 
    private ILocationProvider _locationProvider;
        public LocationController(ILocationProvider locationProvider)
        {
            _locationProvider = locationProvider;
        }
        [HttpGet("getCurrentLocation")]
        public CurrentLocationData GetCurrentLocation() {
            CurrentLocationData res = _locationProvider.GetLocation();
            return res;
        }
        [HttpPost("saveCurrentLocation")]
        public bool SaveCurrentLocation([FromBody] dynamic locationData)
        {

            return _locationProvider.SaveCurrentLocation(locationData);
        }
    }
}