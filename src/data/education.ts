export const educationEntries = [{ key: 'polito' }, { key: 'arden' }] as const;

export type EducationKey = (typeof educationEntries)[number]['key'];

export const certifications = ['telcB1', 'awsCloud'] as const;

export type CertificationKey = (typeof certifications)[number];
