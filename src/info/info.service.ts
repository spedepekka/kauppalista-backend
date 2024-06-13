import { Injectable } from '@nestjs/common';

@Injectable()
export class InfoService {
    private info = {
        // The Android app gets this value and checks if the app must be updated
        "android": {
            "minVersion": 1
        }
    }

    getInfo() {
        return this.info
    }
}
