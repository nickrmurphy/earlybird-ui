import { CalendarCorner } from "../constants";

export default function getCorner(index: number, totalDays: number) {
    if (index === 0) return CalendarCorner.TL;
    if (index === 6) return CalendarCorner.TR;
    if (index === totalDays - 7) return CalendarCorner.BL;
    if (index === totalDays - 1) return CalendarCorner.BR;
    return undefined;
}
