import { mount } from '@vue/test-utils';
import {describe, it, expect, vi, beforeEach} from 'vitest';
import LoginView from "../../src/view/LoginView.vue";
import {createPinia, setActivePinia} from "pinia"; // Import your component

describe('LoginView.vue', () => {

    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('rendering the form elements', () => {
        const wrapper = mount(LoginView);
        const usernameInput = wrapper.find('#floatingInput');
        const passwordInput = wrapper.find('#floatingPassword');
        expect(usernameInput.exists()).toBe(true);
        expect(passwordInput.exists()).toBe(true);

        const usernameLabel = wrapper.find('label[for="floatingInput"]');
         const passwordLabel = wrapper.find('label[for="floatingPassword"]');

        expect(usernameLabel.text()).toBe('User Name');
        expect(passwordLabel.text()).toBe('Password');
    });

    it('check username and password with v-model correctly binded or not', async () => {
        const wrapper = mount(LoginView);

        const usernameInput = wrapper.find('#floatingInput');
        const passwordInput = wrapper.find('#floatingPassword');
        await usernameInput.setValue('Sunil');
        await passwordInput.setValue('Sunil@123');
        expect(wrapper.vm.userForm.username).toBe('Sunil');
        expect(wrapper.vm.userForm.password).toBe('Sunil@123');
    });

});
