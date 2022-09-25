package com.info.weatherapi.model;

public class DayPlace {
    private String name;
    private String phenomenon;
    private String tempmax;

    public String getName() { return name; }
    public void setName(String value) { this.name = value; }

    public String getPhenomenon() { return phenomenon; }
    public void setPhenomenon(String value) { this.phenomenon = value; }

    public String getTempmax() { return tempmax; }
    public void setTempmax(String value) { this.tempmax = value; }
}