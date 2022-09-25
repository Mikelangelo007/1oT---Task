package com.info.weatherapi.controller;


import java.io.IOException;
import java.io.InputStream;

import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamException;
import javax.xml.stream.XMLStreamReader;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.dataformat.xml.XmlMapper;
import com.info.weatherapi.model.Forecasts;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api")
public class WeatherApiController {
	@Autowired
	private WeatherService weatherService;


	
	@GetMapping(value="/forecasts", produces= MediaType.APPLICATION_JSON_VALUE)
	public Forecasts getAllForecastsComplete() {
		return weatherService.findAllForecastsComplete();
	}
	
}


