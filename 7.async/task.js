class AlarmClock{
    constructor(alarmCollection, timerId){
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id){
        if(!id){
            throw new Error ("Параметр 'id' не передан");
        } else if(this.alarmCollection.some(clock => clock.id === id)){
            console.error("Будильник с таким 'id' уже существует");
            return
        }
        
        this. alarmCollection.push({time, callback, id});
    }

    removeClock(id){
        const lenght = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(clock => clock.id !== id);
        const newLenght = this.alarmCollection.length;
        return lenght > newLenght;
    }

    getCurrentFormattedTime() {
        return new Date().toTimeString().slice(0, 5); 
    }

    start(){
        if(this.timerId){
            return;
        }

        const checkClock = (clock) => {
            if(clock.time === this.getCurrentFormattedTime){
                return clock.callback();
            }
        }
        
        this.timerId = setInterval(() => {
                this.alarmCollection.forEach(checkClock);
            }, 1000);
    }

        stop(){
            if(this.timerId){
                clearInterval(this.timerId);
                this.timerId = null;
            }
        }

        printAlarms(){
            this.alarmCollection.forEach(clock => console.log(`Будильник № ${clock.id} заведен на ${clock.time}`));
        }

        clearAlarms(){
            this.stop();
            this.alarmCollection = [];
        }
}

function testCase(){
    const phoneAlarm = new AlarmClock;
    phoneAlarm.addClock("06:00", () => console.log("Вставай"), 1);
    phoneAlarm.addClock("06:01", () => {console.log("Вставай уже"); phoneAlarm.removeClock(2)}, 2);
    phoneAlarm.addClock("06:01", () => console.log("Уже пора вставать"));
    phoneAlarm.addClock("06:02", () => {
        console.log("Вставай, а то проспишь!");
        phoneAlarm.clearAlarms();
        phoneAlarm.printAlarms();
    }, 3);
    phoneAlarm.printAlarms();
    phoneAlarm.start();
}