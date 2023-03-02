var fs = require('fs'),
hlkz_buffer = fs.readFilesync('/home/unko/repos/hlviewer.js/src/HlkzReplay/bkz_goldbhop_0_0_158388978_pure.dat')

export function mrdat() {
    
    let result = [
        
    ];

    console.log(hlkz_buffer.length);
    let len = hlkz_buffer.length; /// 30;
    let offset = 0;

    while(true) {
        var result2 = {
            time: hlkz_buffer.readFloatLE(0 + offset),
            x: hlkz_buffer.readFloatLE(4 + offset),
            y: hlkz_buffer.readFloatLE(8 + offset),
            z: hlkz_buffer.readFloatLE(12 + offset),
            anglesx: hlkz_buffer.readFloatLE(16 + offset),
            anglesy: hlkz_buffer.readFloatLE(20 + offset),
            anglesz: hlkz_buffer.readFloatLE(24 + offset),
            buttons: hlkz_buffer.readUInt8(28 + offset)
        }
        console.log(result2);
        result.push(result2);

        offset += 30;
        console.log(offset, len);

        if (offset <= len)
            break;
    }
}

/*
while(true) {
    let bla = read(32, offset);
    if (bla.length > 0) {
        offset += 32;
    }
    else {
        break;
    }
    console.log(bla);
}


function read(bytes, offset) {
    
}*/