export interface User {
    $id?: string;
    active: boolean;
    timeStamp: string;
    sessions: number;
    f_name: string;
    l_name: string;
    b_day: string;
    email: string;
    phone: string;
    questions: {
        root_canal: boolean;
        mold: boolean;
        missing_organs: boolean;
        tap_water: boolean;
        alcohol: boolean;
        c_section: boolean;
        birth_control: boolean;
        implants: boolean;
        uti: boolean;
        mercury_fillings: boolean;
        surgeries: boolean;
        botox: boolean;
        emf: boolean;
    };
    lifestyle: {
        water: string[];
        exercise: string[];
        work: string[];
        stress: string[];
        sleep: string[];
    }
    history: string[];
    symptoms: string[];
    medications: string[];
    supplements: string[];
    conductivity: number;
    left_spin: boolean;
    biotoxicosis: string;
    findings: string[];
    diet: string[];
    detox: string[];
    food_restrictions: string[];
    remedy_suggestions: Array<string[]>;
    notes: string[];
}
