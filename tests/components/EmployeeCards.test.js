import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import Table from '../../src/components/Table.vue'; // Adjust the import path as needed

describe('Table.vue', () => {
    let employees;

    beforeEach(() => {
        employees = [
            {
                employeeId: 1,
                name: 'Sunil',
                age: 18,
                gender: 'MALE',
                adharNumber: '1234 5678 9876',
                department: 'Engineering',
                designation: 'Software Engineer',
                salary: 23000,
                joiningDate: '2024-12-12',
            },
            {
                employeeId: 2,
                name: 'Raj',
                age: 22,
                gender: 'MALE',
                adharNumber: '9876 5432 1234',
                department: 'Marketing',
                designation: 'Marketing Manager',
                salary: 25000,
                joiningDate: '2024-11-01',
            },
        ];
    });

    it('correctly render employee information on Ui ', async () => {
        const wrapper = mount(Table, {
            props: { employees },
        });

        expect(wrapper.text()).toContain('Sunil');
        expect(wrapper.text()).toContain('Raj');

        expect(wrapper.text()).toContain('MALE');
        expect(wrapper.text()).toContain('18');
        expect(wrapper.text()).toContain('Engineering');
        expect(wrapper.text()).toContain('Software Engineer');
        expect(wrapper.text()).toContain('23000');
        expect(wrapper.text()).toContain('2024-12-12');
    });


    it('employee information should not be rendered if there are no employees', async () => {
        const wrapper = mount(Table, {
            props: { employees: [] },
        });

        expect(wrapper.text()).not.toContain('Sunil');
        expect(wrapper.text()).not.toContain('Raj');
    });
});
