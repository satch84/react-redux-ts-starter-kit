import { TEST_ACTION } from '../../const/actions';
import { ICreateTestAction } from '../../models'; 

export const usernameCreate = (data: string): ICreateTestAction => ({
    payload: {
        data,
    },
    type: TEST_ACTION,
});
