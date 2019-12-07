import React from "react";
import BackButton from "./BackButton";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import toJson from "enzyme-to-json";
import {MemoryRouter} from "react-router";

describe("BackButton", () => {

    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const clearStateMock = jest.fn();

    const initialState = {
        clearState: clearStateMock,
    };
    let store;
    let wrapper;

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = mount(
            <MemoryRouter>
                <BackButton store={store}/>
            </MemoryRouter>
        );
    });

    it('renders correctly', () => {
        expect(toJson(wrapper)).toMatchSnapshot();
    });


    it('Expect clearState function was called after clickin on button', () => {
        console.log(wrapper.find('button').html())
        wrapper.find('button').simulate('click');
        expect(store.getActions()).toEqual([
            {
                "type": "CLEAR_STATE"
            }]);
    });

});

