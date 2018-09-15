export class Superman {
    flight() {
        console.log('I\'m flying, wohooo!!!');
    }
    isSuperman(): this is Superman {
        return true;
    }

    isFlash(): this is Flash {
        return false;
    }
}

export class Flash {
    runSuperFast() {
        console.log('I\'m running suuuuuuper fast!!!');
    }
    isSuperman(): this is Superman {
        return false;
    }

    isFlash(): this is Flash {
        return false;
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