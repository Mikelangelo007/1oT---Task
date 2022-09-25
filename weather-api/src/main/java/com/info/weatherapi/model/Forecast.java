package com.info.weatherapi.model;

import java.time.LocalDate;

import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;

public class Forecast {
    private Night night;
    private Day day;
    @JacksonXmlProperty(isAttribute = true, localName = "date")
    private LocalDate date;

    public Night getNight() { return night; }
    public void setNight(Night value) { this.night = value; }

    public Day getDay() { return day; }
    public void setDay(Day value) { this.day = value; }

    public LocalDate getDate() { return date; }
    public void setDate(LocalDate value) { this.date = value; }
}

