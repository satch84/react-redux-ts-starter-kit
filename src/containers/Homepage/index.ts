import { connect } from 'react-redux';
import { IStore } from '../../models';
import { usernameCreate } from '../../redux/actions';
import { Homepage } from './Homepage';

const mapStateToProps = (state: IStore) => ({
    username: state.username,
});

const mapDispatchToProps = (dispatch: any) => ({
    usernameCreate: (data: string) => dispatch(usernameCreate(data)),
});

const ConnectedHomepage = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Homepage);

export { ConnectedHomepage as Homepage };
