export enum EmployeeAttributes {
    Id = 'id',
    FirstName = 'firstName',
    LastName = 'lastName',
    Email = 'email',
    JobTitle = 'jobTitle',
}

export interface Employee {
    [EmployeeAttributes.Id]: string;
    [EmployeeAttributes.FirstName]: string;
    [EmployeeAttributes.LastName]: string;
    [EmployeeAttributes.Email]: string;
    [EmployeeAttributes.JobTitle]: string;
}

export const getEmployeeAttributes = () =>
    Object.keys(EmployeeAttributes).map((e) => e);
