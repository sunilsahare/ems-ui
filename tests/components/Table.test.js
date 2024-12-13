import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import Table from "../../src/components/Table.vue";

describe("Table.vue", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    let employees = [
        {
            employeeId: 1,
            name: "Sunil",
            age: 18,
            gender: 'MALE',
            adharNumber: "1234 5678 9876",
            address: {
                city: "Pune",
                state: "Maharashtra",
                street: "Pennsylvania",
                pinCode: 444108,
            },
            city: "Pune",
            salary: 23000,
            department: "Engineering",
            designation: "Software Engineer",
            joiningDate: "2024-12-12",
        },
        {
            employeeId: 2,
            name: "Raj",
            age: 22,
            gender: 'MALE',
            adharNumber: "9876 5432 1234",
            address: {
                city: "Mumbai",
                state: "Maharashtra",
                street: "Marine Drive",
                pinCode: 400001,
            },
            city: "Mumbai",
            salary: 25000,
            department: "Marketing",
            designation: "Marketing Manager",
            joiningDate: "2024-11-01",
        },
    ];

    it("rendering table heading", () => {
        const wrapper = mount(Table, {
            props: { employees },
        });

        const headers = wrapper.findAll("th");
        expect(headers[0].text()).toBe("Id");
        expect(headers[1].text()).toBe("Name");
        expect(headers[2].text()).toBe("Age");
        expect(headers[3].text()).toBe("Gender");
        expect(headers[4].text()).toBe("Adhar No");
        expect(headers[5].text()).toBe("City");
        expect(headers[6].text()).toBe("Salary");
        expect(headers[7].text()).toBe("Department");
        expect(headers[8].text()).toBe("Designation");
        expect(headers[9].text()).toBe("Joining Date");
        expect(headers[10].text()).toBe("Action");
    });

    it("rendering employees", () => {
        const wrapper = mount(Table, {
            props: { employees },
        });

        const rows = wrapper.findAll("tbody tr");
        expect(rows).toHaveLength(employees.length);
        expect(rows[0].find("td").text()).toContain(employees[0].name);
        expect(rows[1].find("td").text()).toContain(employees[1].name);
    });
});
