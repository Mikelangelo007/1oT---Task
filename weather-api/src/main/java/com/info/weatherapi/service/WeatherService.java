package com.info.weatherapi.service;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.info.weatherapi.model.Forecasts;



@Service
public class WeatherService {
	@Autowired
	private RestTemplate template = new RestTemplate();
	
	public Forecasts findAllForecastsComplete() {
		HttpHeaders headers = new HttpHeaders();
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_XML));
		HttpEntity<String> entity = new HttpEntity<String>("parameters", headers);
		
		ResponseEntity<Forecasts> response = template.exchange("https://www.ilmateenistus.ee/ilma_andmed/xml/forecast.php?lang=eng", HttpMethod.GET, entity, Forecasts.class);
		System.out.println(response.toString());
		Forecasts responseBody = response.getBody();
		System.out.println(responseBody);
		return responseBody;
	}
	

}

