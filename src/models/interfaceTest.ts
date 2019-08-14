import { IAction } from './InterfaceAction';

export interface ICreateTestAction extends IAction {
    payload: {
        data: string
    };
}
