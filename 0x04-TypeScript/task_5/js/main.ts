// Define the MajorCredits interface
export interface MajorCredits {
    credits: number;
    // Add a brand property to uniquely identify this interface
    _majorBrand: 'major';
}

// Define the MinorCredits interface
export interface MinorCredits {
    credits: number;
    // Add a brand property to uniquely identify this interface
    _minorBrand: 'minor';
}

// Function to sum MajorCredits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _majorBrand: 'major', // Ensure the result maintains the brand
    };
}

// Function to sum MinorCredits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _minorBrand: 'minor', // Ensure the result maintains the brand
    };
}
