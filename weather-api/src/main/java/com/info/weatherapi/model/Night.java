package com.info.weatherapi.model;

public class Night {
    private String phenomenon;
    private String tempmin;
    private String tempmax;
    private String text;
    private NightPlace[] place;
    private Wind[] wind;
    private String sea;
    private String peipsi;

    public String getPhenomenon() { return phenomenon; }
    public void setPhenomenon(String value) { this.phenomenon = value; }

    public String getTempmin() { return tempmin; }
    public void setTempmin(String value) { this.tempmin = value; }

    public String getTempmax() { return tempmax; }
    public void setTempmax(String value) { this.tempmax = value; }

    public String getText() { return text; }
    public void setText(String value) { this.text = value; }

    public NightPlace[] getPlace() { return place; }
    public void setPlace(NightPlace[] value) { this.place = value; }

    public Wind[] getWind() { return wind; }
    public void setWind(Wind[] value) { this.wind = value; }

    public String getSea() { return sea; }
    public void setSea(String value) { this.sea = value; }

    public String getPeipsi() { return peipsi; }
    public void setPeipsi(String value) { this.peipsi = value; }
}