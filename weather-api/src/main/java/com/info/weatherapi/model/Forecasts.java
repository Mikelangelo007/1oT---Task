package com.info.weatherapi.model;

import java.util.List;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.xml.annotate.JacksonXmlRootElement;


@JacksonXmlRootElement(localName="forecasts")
public class Forecasts {
//	@JacksonXmlElementWrapper
    private List<Forecast> forecast;
    
    }