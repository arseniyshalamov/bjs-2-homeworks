"use strict"

class AlarmClock {
    constructor() {
      this.alarmCollection = [];  //все звонки здесь, добавленные addClock
      this.intervalId = null;  //id таймер
    }

    //добавляет новый звонок в коллекцию существующих
    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        if (this.alarmCollection.some(element => element.time === time)) {
            console.warn('Уже присутствует звонок на это же время')
        }

        this.alarmCollection.push({time, callback, canCall: true});
    }

    //удаляет звонки по определённому времени(не добавление)
    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(elm => elm.time !== time);
    }

    //возвращает текущее время в строковом формате
    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    }

    //запускает будильник
    start() {
        if (this.intervalId !== null) {
            return;
        }

        const func = () => this.alarmCollection.forEach(check => {
            if (check.time === this.getCurrentFormattedTime() && check.canCall){
                check.canCall = false;
                check.callback();
            }
        });
        this.intervalId = setInterval(func, 1000);
    }

    //останавливает выполнение интервала будильника
    stop() {
        //удоляет интервал
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    //сбрасывает возможность запуска всех звонков
    resetAllCalls() {
        this.alarmCollection.forEach(resetAllCall => resetAllCall.canCall = true);
    }

    //удаляет все звонки
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}