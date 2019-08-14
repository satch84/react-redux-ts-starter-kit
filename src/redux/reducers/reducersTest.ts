import { TEST_ACTION } from '../../const/actions';
import { IActionTypes, ICreateTestAction } from '../../models';
import { initialState } from '../store/initialState';

export const username = (state = initialState.username, action: IActionTypes)   => {
    const { type } = action;

    switch (type) {
        case TEST_ACTION:
            const {
                payload: { data },
            } = action as ICreateTestAction;

            return data;

        default:
            return state;
    }
};
