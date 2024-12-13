import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import InputWithError from '../../src/components/InputWithError.vue';

describe('InputWithError.vue', () => {

    it('rendering input if "type" is "text"', async () => {
        const wrapper = mount(InputWithError, {
            props: {
                type: 'text',
                label: 'Name',
                inputId: 'name',
                placeholder: 'Enter name',
                task: 'name',
                'onUpdate:task': (e) => wrapper.setProps({ task: e }),
                error: 'Some error',
                'onUpdate:error': (e) => wrapper.setProps({ error: e }),
            },
        });

        const input = wrapper.find('input');
        expect(input.exists()).toBe(true);
        expect(input.attributes('type')).toBe('text');
        expect(input.attributes('placeholder')).toBe('Enter name');
        expect(input.attributes('aria-invalid')).toBe("true");
        expect(input.element.value).toBe('name');

        const errorMsg = wrapper.find('small');
        expect(errorMsg.exists()).toBe(true);
        expect(errorMsg.text()).toBe('Some error');
    });

    it('rendering input if "type" is "number"', async () => {
        const wrapper = mount(InputWithError, {
            props: {
                type: 'number',
                label: 'Age',
                inputId: 'age',
                placeholder: 'Enter age',
                task: 25,
                'onUpdate:task': (e) => wrapper.setProps({ task: e }),
                error: 'Age is required',
                'onUpdate:error': (e) => wrapper.setProps({ error: e }),
            },
        });

        const input = wrapper.find('input');
        expect(input.exists()).toBe(true);
        expect(input.attributes('type')).toBe('number');
        expect(input.attributes('placeholder')).toBe('Enter age');
        expect(input.attributes('aria-invalid')).toBe("true");
        expect(input.element.value).toBe('25');

        const errorMsg = wrapper.find('small');
        expect(errorMsg.exists()).toBe(true);
        expect(errorMsg.text()).toBe('Age is required');
    });

    it('renders an input if "type" is "date"', async () => {
        const wrapper = mount(InputWithError, {
            props: {
                type: 'date',
                label: 'Joining Date',
                inputId: 'joiningDate',
                placeholder: 'Enter joining date',
                task: '2024-12-12',
                'onUpdate:task': (e) => wrapper.setProps({ task: e }),
                error: 'Invalid date',
                'onUpdate:error': (e) => wrapper.setProps({ error: e }),
            },
        });

        const input = wrapper.find('input');
        expect(input.exists()).toBe(true);
        expect(input.attributes('type')).toBe('date');
        expect(input.attributes('placeholder')).toBe('Enter joining date');
        expect(input.attributes('aria-invalid')).toBe("true");
        expect(input.element.value).toBe('2024-12-12');

        const errorMsg = wrapper.find('small');
        expect(errorMsg.exists()).toBe(true);
        expect(errorMsg.text()).toBe('Invalid date');
    });

    it('rendering input with correct task binding and error messages', async () => {
        const wrapper = mount(InputWithError, {
            props: {
                type: 'text',
                label: 'Department',
                inputId: 'department',
                placeholder: 'Enter department',
                task: 'Engineering',
                'onUpdate:task': (e) => wrapper.setProps({ task: e }),
                error: 'Department is required',
                'onUpdate:error': (e) => wrapper.setProps({ error: e }),
            },
        });

        const input = wrapper.find('input');
        expect(input.element.value).toBe('Engineering');

        const errorMsg = wrapper.find('small');
        expect(errorMsg.exists()).toBe(true);
        expect(errorMsg.text()).toBe('Department is required');

        await input.setValue('Sales');
        expect(wrapper.vm.task).toBe('Sales');
    });

    it('handle placeholder text for input', async () => {
        const wrapper = mount(InputWithError, {
            props: {
                type: 'text',
                label: 'Designation',
                inputId: 'designation',
                placeholder: 'Enter designation',
                task: 'Manager',
                'onUpdate:task': (e) => wrapper.setProps({ task: e }),
                error: '',
                'onUpdate:error': (e) => wrapper.setProps({ error: e }),
            },
        });

        const input = wrapper.find('input');
        expect(input.exists()).toBe(true);
        expect(input.attributes('placeholder')).toBe('Enter designation');
    });
});
