export class Orario {
    constructor(h, m, s) {
        this.h = h;
        this.m = m;
        this.s = s;
        this.totalMs = (h * 3600 + m * 60 + s) * 1000;
    }

    diff(altroOrario) {
        const diffMs = Math.abs(this.totalMs - altroOrario.totalMs);

        return {
            milliseconds: diffMs,
            seconds: diffMs / 1000,
            minutes: diffMs / (1000 * 60),
            hours: diffMs / (1000 * 60 * 60)
        };
    }
}
