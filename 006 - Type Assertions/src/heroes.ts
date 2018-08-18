export class Superman {
    flight() {
        console.log('I\'m flying, wohooo!!!');
    }
}

export class Flash {
    runSuperFast() {
        console.log('I\'m running suuuuuuper fast');
    }
}

function exhaustCheck(_: never) { }

export function summonSuperhero(name: 'Superman' | 'Flash'): Superman | Flash {
    switch (name) {
        case 'Flash':
            return new Flash();
        case 'Superman':
            return new Superman();
    }

    exhaustCheck(name);
}