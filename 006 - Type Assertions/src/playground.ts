import { summonSuperhero, Superman, Flash } from './heroes';

const hero = summonSuperhero('Superman');

console.clear();

// type cast assertion
if((<Superman>hero).flight){
    (<Superman>hero).flight()
}
if((<Flash>hero).runSuperFast){
    (<Superman>hero).flight()
}

// instanceof

if(hero instanceof Superman){
    hero.flight()
}
// runtime type assertion

if(hero.isFlash(){
    hero.runSuperFast();
})

if(hero.isSuperman()){
    hero.flight()
}