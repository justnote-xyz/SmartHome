"use strict";
class SmartHome {
    constructor (name, adress){
        this._name = name;
        this._adress = adress;
        this._devices = [];
    }
    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }
    get adress(){
        return this._adress
    }
    set adress(adress){
        this._adress = adress;
    }
    addDevice(device){
        this._devices.push(device);
    }
    deleteDevice(device){
        let index = this._devices.indexOf(device);
        this._devices.splice(index - 1, 1);
    }
    get devices(){
        return this._devices;
    }
    statefilter(value){
       let result = [];
        for (let i = 0; i < this.devices.length; i++){
            if (this.devices[i]._status === value){
            result.push(this.devices[i]);
            }   
        }
       return result;
    }
    
    changeStatusAllDevices(value){
        for (let i = 0; i < this._devices.length; i++ ){
            this._devices[i]._status = value;
        }
    }
}

class Device {
    constructor (name, model){
        this._name = name;
        this._model = model;
        this._status = false;
    }
    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }
    get model(){
        return this._model;
    }
    set model(model){
        this._name = model;
    }
    get status(){
        return this._status
    }
    set status(status){
        this._status = status;
    }
    on(){
        this.status = true;
    }
    off(){
        this.status = false;
    }
}

class Player extends Device {
    constructor (name, model) {
        super(name, model);
        this.tracks = ["Linkin Park","Jane Air","5 Diez"];
        this.track = 0;
        this.playStatus = false;
        this._volume = 50;
    }
    get volume(){
        return this._volume;
    }
    set volume(volume){
        this._volume = volume;
    }
    play(){
        if (this.status === true){
            this.playStatus = true;
        }
    }
    pause(){
        if (this.status === true){
            if (this.playStatus === true){
                this.playStatus = false
            } else {
                this.playStatus = true
            }
        }
    }
    stop(){
        if (this.status === true){
        this.playStatus = false;
        }
    }
    nextTrack(){
        if (this.status === true){
        this.track++;
        }
    }
    previousTrack(){
        if (this.status === true){
        this.track--;
        }
    }
    volumeUp(){
        if (this.status === true && this.volume < 100){
        this.volume += 10;
        }
    }
    volumeDown(){
        if (this.status === true && this.volume > 0){
        this.volume -= 10;
        }
    }
}

class AirConditioner extends Device {
    constructor (name, model){
        super (name, model);
        this.mode = 0;
        this.mods = ["auto", "heat", "cool", "dry"];
        this.temperature = 20;
    }
    nextMode(){
        if (this._status === true){
            if (this.mode < (this.mods.length - 1)){
                this.mode++;
            }  
            else {
                this.mode = 0;
                }
            }
        }
    previousMode(){
        if (this._status === true){
            if (this.mode > 0){
                this.mode--;
            } 
            else {
                this.mode = (this.mods.length - 1);
                }
            }
        }
    tempIncrease(){
        if (this._status === true &&    this.temperature <= 31){
            this.temperature++
        }
    }
    tempDecrease(){
        if (this._status === true &&    this.temperature >= 16){
            this.temperature--
        }
    }
}

let myhome = new SmartHome ("Центральный","Пушкинская 12");

let sony = new Player ("Sony","SP15");
myhome.addDevice(sony);
let samsung = new Player ("Samsung","es255");
myhome.addDevice(samsung);
let apple = new Player ("Apple","ipod");
myhome.addDevice(apple);
let samurai = new AirConditioner("Samurai","HaraKiri");
myhome.addDevice(samurai);