import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('Pacific/Auckland');
dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);
export default function dayTz(date, format, strict) {
    return dayjs.tz(dayjs(date, format, strict));
}
//# sourceMappingURL=daytz.js.map