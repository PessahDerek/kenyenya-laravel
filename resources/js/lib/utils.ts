import { type ClassValue, clsx } from 'clsx';
import dayjs from 'dayjs';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function greaterMiddle(list: { [key: string]: string }[], field: string) {
    const toShort = list.sort((a, b) => b[field].length - a[field].length);
    const greatest = { ...toShort[0] };
    const useList = [...toShort.filter((val, i) => i !== 0)];
    const midIndex = Math.floor(list.length / 2);
    const result = [];
    for (let i = 0; i < useList.length; i++) {
        if (i === midIndex) result.push(greatest);
        result.push(useList[i]);
    }
    return result;
}

export const intakeOverDue = (intake: IntakeObj) => {
    const d = dayjs();
    const monthYear = d.isAfter(intake.closes, 'month');
    const day = d.isAfter(intake.closes, 'day');
    return monthYear && day;
};

export const intakeOpen = (intake: IntakeObj) => {
    const d = dayjs();
    const monthYear = d.isSame(intake.closes, 'month');
    const openDay = d.isSame(intake.open, 'day') || d.isAfter(intake.open, 'day');
    const closeDay = d.isSame(intake.closes, 'day') || d.isBefore(intake.closes, 'day');
    return monthYear && openDay && closeDay;
};

export const nextIntake = (intakes: IntakeObj[]) => {
    const d = dayjs();
    const diffs: number[] = [];
    for (let i = 0; i < intakes.length; i++) {
        const diff = d.diff(intakes[i]?.open);
        diffs.push(diff >= 0 ? diff : diff * -1);
    }
    console.log(diffs)
    const min = Math.max(...diffs);
    return intakes[diffs.indexOf(min)];
};

export function centerIntake(list: IntakeObj[]) {
    const copyList = [...list];
    const newList = [];
    for (const intake of copyList) {
        if (intakeOverDue(intake)) {
            intake.open = new Date(intake.open);
            intake.open.setFullYear(intake.open.getFullYear() + 1);
            if (intake.closes) {
                intake.closes = new Date(intake.closes);
                intake.closes.setFullYear(intake.closes.getFullYear() + 1);
            }
        }
        newList.push(intake);
    }

    const open = list.find((x) => intakeOpen(x));
    const overdue = list.find((x) => intakeOverDue(x));
    const next = nextIntake(list);
    const x = [{ ...(next ?? {}), next: true }, { ...(open ?? {}), isOpen: true }, { ...(overdue ?? {}) }];
    console.log(x);
    return x;
}

export function sortIntakes(intakes: IntakeObj[]): IntakeObj[] {
    const currentDate = new Date("2025-03-31"); // Local time, March 31, 2025
    currentDate.setHours(0, 0, 0, 0); // Normalize to midnight
    const currentYear = currentDate.getFullYear();

    // Helper to normalize dates to midnight local time and adjust year
    const getAdjustedOpenDate = (intake: IntakeObj): Date => {
        const openDate = new Date(intake.open);
        openDate.setHours(0, 0, 0, 0); // Normalize to midnight
        const openMonth = openDate.getMonth();
        const openDay = openDate.getDate();
        const currentMonth = currentDate.getMonth();
        const currentDay = currentDate.getDate();

        if (
            openMonth < currentMonth ||
            (openMonth === currentMonth && openDay < currentDay)
        ) {
            openDate.setFullYear(currentYear + 1);
        } else if (openDate.getFullYear() < currentYear) {
            openDate.setFullYear(currentYear);
            if (
                openMonth < currentMonth ||
                (openMonth === currentMonth && openDay < currentDay)
            ) {
                openDate.setFullYear(currentYear + 1);
            }
        }
        return openDate;
    };

    // Determine intake status and set isNext/isOpen
    const getIntakeStatus = (intake: IntakeObj): number => {
        const open = new Date(intake.open);
        open.setHours(0, 0, 0, 0); // Normalize to midnight
        const adjustedOpen = getAdjustedOpenDate(intake);
        const closes = intake.closes ? new Date(intake.closes) : null;
        if (closes) closes.setHours(0, 0, 0, 0); // Normalize closes to midnight

        // Reset fields
        intake.isNext = undefined;
        intake.isOpen = undefined;

        // Next: Adjusted open is strictly in the future
        if (adjustedOpen > currentDate && (!closes || closes > currentDate)) {
            intake.isNext = true;
            return 1;
        }

        // Open: Open is on or before today, and either no close or close is on or after today
        if (open <= currentDate && (!closes || closes >= currentDate)) {
            intake.isOpen = true;
            return 2;
        }

        // Overdue: Anything else (closed in the past)
        return 3;
    };

    // Sort by status, then by adjusted open date
    return intakes.sort((a, b) => {
        const statusA = getIntakeStatus(a);
        const statusB = getIntakeStatus(b);

        if (statusA !== statusB) {
            return statusA - statusB; // Next (1), Open (2), Overdue (3)
        }

        const adjustedOpenA = getAdjustedOpenDate(a);
        const adjustedOpenB = getAdjustedOpenDate(b);
        return adjustedOpenA.getTime() - adjustedOpenB.getTime();
    });
}
