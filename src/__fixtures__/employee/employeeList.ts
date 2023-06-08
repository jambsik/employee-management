import { Employee } from './../../Models/Employee/index';

export const employeeListMock: Employee[] = [
    {
        id: '1',
        firstName: 'Jose',
        lastName: 'Travolta',
        email: 'jose.travolta@example.com',
        jobTitle: 'Developer',
    },
    {
        id: '2',
        firstName: 'Jane',
        lastName: 'Carles',
        email: 'jane.carles@example.com',
        jobTitle: 'Designer',
    },
    {
        id: '3',
        firstName: 'Michael',
        lastName: 'Johnson',
        email: 'michael.johnson@example.com',
        jobTitle: 'Engineer',
    },
    {
        id: '4',
        firstName: 'Sarah',
        lastName: 'Andrea',
        email: 'sarah.andrea@example.com',
        jobTitle: 'Manager',
    },
    {
        id: '99',
        firstName: 'David',
        lastName: 'Miller',
        email: 'david.miller@example.com',
        jobTitle: 'Administrator',
    },
    {
        id: '100',
        firstName: 'Emily',
        lastName: 'Brown',
        email: 'emily.brown@example.com',
        jobTitle: 'Analyst',
    },
    {
        id: '38899',
        firstName: 'Roxanne',
        lastName: 'Ernesto',
        email: 'Brisa_Witting@gmail.com',
        jobTitle: 'Developer',
    },
];

export const newEmployeeMock: Omit<Employee, 'id'> = {
    firstName: 'Joan',
    lastName: 'Favreau',
    email: 'joan.f@example.com',
    jobTitle: 'Analyst',
};

export const employeeToDeleteMock: Employee = employeeListMock[0];
