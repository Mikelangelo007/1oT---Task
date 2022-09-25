package com.info.weatherapi.model;

public class Wind {
    private String name;
    private String direction;
    private String speedmin;
    private String speedmax;
    private String gust;

    public String getName() { return name; }
    public void setName(String value) { this.name = value; }

    public String getDirection() { return direction; }
    public void setDirection(String value) { this.direction = value; }

    public String getSpeedmin() { return speedmin; }
    public void setSpeedmin(String value) { this.speedmin = value; }

    public String getSpeedmax() { return speedmax; }
    public void setSpeedmax(String value) { this.speedmax = value; }

    public String getGust() { return gust; }
    public void setGust(String value) { this.gust = value; }
}